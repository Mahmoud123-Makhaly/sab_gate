import crypto from 'crypto';

type EnumValueType = string | number;
type AnyObject = Record<string, any>;

const convertEnumToStr = <T extends string | number>(enumType: T): string => {
  return enumType.toString();
};

const checkIfEmpty = (val?: string): boolean => {
  return val?.trim() === null || val?.trim() === undefined || val?.trim() === '';
};

const createHashLink = (
  data: Record<string, string>,
  separator: string,
  secret: string,
  algorithm = 'sha256',
): string => {
  return crypto
    .createHash(algorithm)
    .update(`${JSON.stringify(data)}${separator}${secret}`)
    .digest('hex');
};

const createEncodedHash = (
  data: Record<string, string>,
  separator: string,
  secret: string,
  algorithm = 'sha256',
): string => {
  const hash = createHashLink(data, separator, secret, algorithm);
  return `${Object.keys(data)
    .map(k => `${k}=${encodeURIComponent(data[k])}`)
    .join('&')}&hash=${encodeURIComponent(hash)}`;
};

const isValidHash = (
  data: Record<string, string>,
  separator: string,
  secret: string,
  hash: string,
  algorithm = 'sha256',
): boolean => {
  const _newHash = createHashLink(data, separator, secret, algorithm);
  return _newHash === hash;
};

/**
 * Remove all specified keys from an object, no matter how deep they are.
 * The removal is done in place, so run it on a copy if you don't want to modify the original object.
 * This function has no limit so circular objects will probably crash the browser
 *
 * @param obj The object from where you want to remove the keys
 * @param keys An array of property names (strings) to remove
 */
const removeKeysDeep = (obj: { [k: string]: any }, keys: Array<string>) => {
  var index;
  for (var prop in obj) {
    // important check that this is objects own property
    // not from prototype prop inherited
    if (obj.hasOwnProperty(prop)) {
      switch (typeof obj[prop]) {
        case 'object':
          index = keys.indexOf(prop);
          if (index > -1) {
            delete obj[prop];
          } else {
            removeKeysDeep(obj[prop], keys);
          }
          break;
        default:
          keys.forEach(k => {
            if (k === prop) delete obj[prop];
          });
          break;
      }
    }
  }
};

const valueToEnum = <T>(enumType: T, val: EnumValueType): T | undefined => {
  const enumKeys = Object.keys(enumType ?? {}) as (keyof typeof enumType)[];
  const key = enumKeys.find(key => enumType[key] === val);
  return key !== undefined ? (enumType[key] as T) : undefined;
};

const compareValues = (source: any, target: any, operator: 'sw' | 'swi' | 'eq' | 'in' | 'ini') => {
  console.log({ source, target, operator, result: !!~target.indexOf(source) });
  switch (operator) {
    case 'sw': // Start With case sensitive
      return source?.startsWith(target);
    case 'swi': // Start With case insensitive
      return source?.toLowerCase().startsWith(target?.toLowerCase());
    case 'eq': // Equal To
      return source === target;
    case 'in': // Includes case sensitive
      return source.toString().includes(target.toString());
    case 'ini': // Includes case insensitive
      return source.toString().toLowerCase().includes(target.toString().toLowerCase());
    default:
      return false;
  }
};

function hasPropertyWithSpecificValue(obj: any, targetProp: string, targetValue: any): boolean;
function hasPropertyWithSpecificValue(
  obj: any,
  targetProp: string,
  targetValue: any,
  operator: 'sw' | 'swi' | 'eq' | 'in' | 'ini',
): boolean;
function hasPropertyWithSpecificValue(
  obj: AnyObject,
  targetProp: string,
  targetValue: any,
  operator: 'sw' | 'swi' | 'eq' | 'in' | 'ini' = 'eq',
): boolean {
  // Check if the object is null or undefined
  if (obj === null || typeof obj !== 'object') {
    return false;
  }

  if (obj.hasOwnProperty(targetProp) && compareValues(obj[targetProp], targetValue, operator)) {
    return true;
  }

  // If the object is an array, recursively search each element
  if (Array.isArray(obj)) {
    for (const item of obj) {
      if (hasPropertyWithSpecificValue(item, targetProp, targetValue, operator)) {
        return true;
      }
    }
  } else {
    // If the object is not an array, recursively search its properties
    for (const key in obj) {
      if (
        obj.hasOwnProperty(key) &&
        typeof obj[key] === 'object' &&
        hasPropertyWithSpecificValue(obj[key], targetProp, targetValue, operator)
      ) {
        return true;
      }
    }
  }

  // Property with the specific value not found in the object
  return false;
}

export const Utils = {
  convertEnumToStr,
  checkIfEmpty,
  createHashLink,
  createEncodedHash,
  isValidHash,
  removeKeysDeep,
  valueToEnum,
  compareValues,
  hasPropertyWithSpecificValue,
};
