import { DTO } from '@tot/core/types';

export const address = [
  {
    id: 'a123',
    name: 'المنزل',
    firstName: 'محمد',
    lastName: 'علي',
    line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
    phone: '010085412714',
  },
  {
    id: 'b123',
    name: 'العمل',
    firstName: 'محمد',
    lastName: 'علي',
    line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
    phone: '010085412714',
  },
  {
    id: 'c123',
    name: 'المنزل',
    firstName: 'محمد',
    lastName: 'علي',
    line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
    phone: '010085412714',
  },
];
export const addressDto: Array<DTO.IMemberAddressDTO> = [
  {
    id: 'c123',
    addressType: 1,
    firstName: 'محمد',
    lastName: 'علي',
    line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
    email: 'mohamed@123.com',
    city: 'cairo',
    isDefault: false,
    countryCode: 'EG',
    postalCode: '1233',
    phone: '010085412714',
    regionName: 'mokattam',
  },
  {
    id: 'c1255',
    addressType: 2,
    firstName: 'محمد',
    lastName: 'علي',
    line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
    email: 'mohamed@123.com',
    city: 'cairo',
    isDefault: false,
    countryCode: 'EG',
    postalCode: '1233',
    phone: '010085412714',
    regionName: 'mokattam',
  },
  {
    id: 'c5545',
    addressType: 2,
    firstName: 'محمد',
    lastName: 'علي',
    line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
    email: 'mohamed@123.com',
    city: 'cairo',
    isDefault: false,
    countryCode: 'EG',
    postalCode: '1233',
    phone: '010085412714',
    regionName: 'mokattam',
  },
];