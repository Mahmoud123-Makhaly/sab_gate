import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const isBoolean = input => {
  const value = input.toString();
  if (value === '1' || value === 'true') {
    return true;
  } else if (value === '0' || value === 'false') {
    return false;
  } else throw Error(`Invalid boolean`);
};

const ClientTypes = Object.freeze({
  RestAPI: 'RestAPI',
  GraphQL: 'GraphQL',
});
const CultureNames = Object.freeze({
  US: 'en-US',
  EG: 'ar-EG',
});
const Currencies = Object.freeze({
  EGP: 'EGP',
  USD: 'USD',
});

export const env = createEnv({
  server: {
    API_BASE_URL: z.string().url(),
    API_TYPE: z.nativeEnum(ClientTypes),
    MULTIPLE_WAREHOUSE: z.enum(['0', '1', 'true', 'false']).transform(value => isBoolean(value)),
    DEFAULT_CULTURE_NAME: z.nativeEnum(CultureNames),
    DEFAULT_CURRENCY: z.nativeEnum(Currencies),
    OUT_OF_STOCK_BEHAVIOR: z.enum(['on', 'off', 'sorted']),
    STORE_ID: z.string().min(3),
    CATALOG_ID: z.string().min(3),
    SITE_NAME: z.string().min(3).max(60),
    SITE_DESCRIPTION_EN: z.string().min(10).max(300),
    SITE_DESCRIPTION_AR: z.string().min(10).max(300),
    SITE_DOMAIN: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().min(1),
    RESET_PASSWORD_WEB_HOOK: z.string().min(1),
    HASH_SECRET: z.string().min(128),
    REVIEWS_MODE: z.enum(['All', 'Approved', 'Accepted', 'None']),
  },
  client: {},
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_TYPE: process.env.API_TYPE,
    MULTIPLE_WAREHOUSE: process.env.MULTIPLE_WAREHOUSE,
    DEFAULT_CULTURE_NAME: process.env.DEFAULT_CULTURE_NAME,
    DEFAULT_CURRENCY: process.env.DEFAULT_CURRENCY,
    OUT_OF_STOCK_BEHAVIOR: process.env.OUT_OF_STOCK_BEHAVIOR,
    STORE_ID: process.env.STORE_ID,
    CATALOG_ID: process.env.CATALOG_ID,
    SITE_NAME: process.env.SITE_NAME,
    SITE_DESCRIPTION_EN: process.env.SITE_DESCRIPTION_EN,
    SITE_DESCRIPTION_AR: process.env.SITE_DESCRIPTION_AR,
    SITE_DOMAIN: process.env.SITE_DOMAIN,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    RESET_PASSWORD_WEB_HOOK: process.env.RESET_PASSWORD_WEB_HOOK,
    HASH_SECRET: process.env.HASH_SECRET,
    REVIEWS_MODE: process.env.REVIEWS_MODE,
  },
});
