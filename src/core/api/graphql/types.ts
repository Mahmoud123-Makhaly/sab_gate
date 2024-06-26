// This file was generated based on "codegen.types.ts". Do not edit manually.

/* eslint-disable */

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Decimal: any;
  DynamicPropertyValue: any;
  Long: any;
  OptionalDecimal: any;
  OptionalNullableDecimal: any;
  OptionalString: any;
  PropertyValue: any;
};

export type AccountCreationResultType = {
  /** The errors that occurred during the operation. */
  errors?: Maybe<Array<Maybe<RegistrationErrorType>>>;
  requireEmailVerification: Scalars['Boolean'];
  succeeded: Scalars['Boolean'];
};

export type Asset = {
  /** Culture name */
  cultureName?: Maybe<Scalars['String']>;
  /** Group of the asset. */
  group?: Maybe<Scalars['String']>;
  /** The unique ID of the asset. */
  id?: Maybe<Scalars['String']>;
  /** MimeType of the asset. */
  mimeType?: Maybe<Scalars['String']>;
  /** The name of the asset. */
  name?: Maybe<Scalars['String']>;
  /** RelativeUrl of the asset. */
  relativeUrl?: Maybe<Scalars['String']>;
  /** Size of the asset. */
  size?: Maybe<Scalars['Long']>;
  /** Type id of the asset. */
  typeId?: Maybe<Scalars['String']>;
  /** Url of the asset. */
  url?: Maybe<Scalars['String']>;
};

export type AuthorizePaymentResultType = {
  errorMessage?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type AvailabilityData = {
  /** Available quantity */
  availableQuantity: Scalars['Long'];
  /** Inventories */
  inventories?: Maybe<Array<Maybe<InventoryInfo>>>;
  /** Is active */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Is available */
  isAvailable?: Maybe<Scalars['Boolean']>;
  /** Is buyable */
  isBuyable?: Maybe<Scalars['Boolean']>;
  /** Is in stock */
  isInStock?: Maybe<Scalars['Boolean']>;
  /** Is track inventory */
  isTrackInventory?: Maybe<Scalars['Boolean']>;
};

export type Breadcrumb = {
  /** Id of item the breadcrumb calculated for */
  itemId: Scalars['String'];
  /** Semantic URL keyword */
  semanticUrl?: Maybe<Scalars['String']>;
  /** Full path from catalog */
  seoPath?: Maybe<Scalars['String']>;
  /** Name of current breadcrumb */
  title: Scalars['String'];
  /** Catalog, category or product */
  typeName?: Maybe<Scalars['String']>;
};

export type BulkCartType = {
  /** Cart */
  cart?: Maybe<CartType>;
  /** A set of errors in case the Skus are invalid */
  errors?: Maybe<Array<Maybe<ValidationErrorType>>>;
};

export type BulkWishlistType = {
  /** Wishlists */
  wishlists?: Maybe<Array<Maybe<WishlistType>>>;
};

export type CancelQuoteCommandType = {
  comment: Scalars['String'];
  quoteId: Scalars['String'];
};

export type CartAddressType = {
  /** Address type */
  addressType?: Maybe<Scalars['Int']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['String']>;
  /** Id */
  key?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Company name */
  organization?: Maybe<Scalars['String']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Postal code */
  postalCode: Scalars['String'];
  /** Region id */
  regionId?: Maybe<Scalars['String']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']>;
  /** Zip */
  zip?: Maybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `Cart`. */
export type CartConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CartEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CartType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Cart`. */
export type CartEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CartType>;
};

export type CartShipmentItemType = {
  lineItem?: Maybe<LineItemType>;
  /** Quantity */
  quantity?: Maybe<Scalars['Int']>;
};

export type CartType = {
  /** Addresses */
  addresses?: Maybe<Array<Maybe<CartAddressType>>>;
  /** Available Gifts */
  availableGifts?: Maybe<Array<Maybe<GiftItemType>>>;
  /** Available payment methods */
  availablePaymentMethods?: Maybe<Array<Maybe<PaymentMethodType>>>;
  availableShippingMethods?: Maybe<Array<Maybe<ShippingMethodType>>>;
  /** Shopping cart channel ID */
  channelId?: Maybe<Scalars['String']>;
  /** Shopping cart text comment */
  comment?: Maybe<Scalars['String']>;
  /** Coupons */
  coupons?: Maybe<Array<Maybe<CouponType>>>;
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Shopping cart user ID */
  customerId?: Maybe<Scalars['String']>;
  /** Shopping cart user name */
  customerName?: Maybe<Scalars['String']>;
  /** Total discount */
  discountTotal?: Maybe<MoneyType>;
  /** Total discount with tax */
  discountTotalWithTax?: Maybe<MoneyType>;
  /** Discounts */
  discounts?: Maybe<Array<Maybe<DiscountType>>>;
  /** Cart dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  /** Total extended price */
  extendedPriceTotal?: Maybe<MoneyType>;
  /** Total extended price with tax */
  extendedPriceTotalWithTax?: Maybe<MoneyType>;
  fee?: Maybe<MoneyType>;
  /** Gifts */
  gifts?: Maybe<Array<Maybe<GiftItemType>>>;
  /** Total handling */
  handlingTotal?: Maybe<MoneyType>;
  /** Total handling with tax */
  handlingTotalWithTax?: Maybe<MoneyType>;
  /** Has physical products */
  hasPhysicalProducts?: Maybe<Scalars['Boolean']>;
  /** Shopping cart ID */
  id?: Maybe<Scalars['String']>;
  /** Displays whether the shopping cart is anonymous */
  isAnonymous?: Maybe<Scalars['Boolean']>;
  /** Displays whether the shopping cart is recurring */
  isRecuring?: Maybe<Scalars['Boolean']>;
  /**
   * Shows whether the cart is valid
   * @deprecated Deprecated, because of useless (no need to know validation state without details). Use validationErrors field.
   */
  isValid?: Maybe<Scalars['Boolean']>;
  /** Items */
  items?: Maybe<Array<Maybe<LineItemType>>>;
  /** Item count */
  itemsCount?: Maybe<Scalars['Int']>;
  /** Quantity of items */
  itemsQuantity?: Maybe<Scalars['Int']>;
  /** Shopping cart name */
  name: Scalars['String'];
  /** Shopping cart organization ID */
  organizationId?: Maybe<Scalars['String']>;
  /** Payment price */
  paymentPrice?: Maybe<MoneyType>;
  /** Payment price with tax */
  paymentPriceWithTax?: Maybe<MoneyType>;
  /** Total payment */
  paymentTotal?: Maybe<MoneyType>;
  /** Total payment with tax */
  paymentTotalWithTax?: Maybe<MoneyType>;
  /** Payments */
  payments?: Maybe<Array<Maybe<PaymentType>>>;
  /** Purchase order number */
  purchaseOrderNumber?: Maybe<Scalars['String']>;
  /** Shipments */
  shipments?: Maybe<Array<Maybe<ShipmentType>>>;
  /** Shipping price */
  shippingPrice?: Maybe<MoneyType>;
  /** Shipping price with tax */
  shippingPriceWithTax?: Maybe<MoneyType>;
  /** Total shipping */
  shippingTotal?: Maybe<MoneyType>;
  /** Total shipping with tax */
  shippingTotalWithTax?: Maybe<MoneyType>;
  /** Shopping cart status */
  status?: Maybe<Scalars['String']>;
  /** Shopping cart store ID */
  storeId?: Maybe<Scalars['String']>;
  /** Shopping cart subtotal */
  subTotal?: Maybe<MoneyType>;
  /** Subtotal discount */
  subTotalDiscount?: Maybe<MoneyType>;
  /** Subtotal discount with tax */
  subTotalDiscountWithTax?: Maybe<MoneyType>;
  /** Subtotal with tax */
  subTotalWithTax?: Maybe<MoneyType>;
  /** Tax details */
  taxDetails?: Maybe<Array<Maybe<TaxDetailType>>>;
  /** Tax percentage */
  taxPercentRate?: Maybe<Scalars['Decimal']>;
  /** Total tax */
  taxTotal?: Maybe<MoneyType>;
  /** Shipping tax type */
  taxType?: Maybe<Scalars['String']>;
  /** Shopping cart total */
  total?: Maybe<MoneyType>;
  /** Shopping cart type */
  type?: Maybe<Scalars['String']>;
  /** A set of errors in case the cart is invalid */
  validationErrors?: Maybe<Array<Maybe<ValidationErrorType>>>;
  /** Shopping cart volumetric weight value */
  volumetricWeight?: Maybe<Scalars['Decimal']>;
  /** A set of temporary warnings for a cart user */
  warnings?: Maybe<Array<Maybe<ValidationErrorType>>>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars['Decimal']>;
  /** Shopping cart weight unit value */
  weightUnit?: Maybe<Scalars['String']>;
};


export type CartTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};


export type CartTypeIsValidArgs = {
  ruleSet?: InputMaybe<Scalars['String']>;
};


export type CartTypeValidationErrorsArgs = {
  ruleSet?: InputMaybe<Scalars['String']>;
};

export type CatalogDiscountType = {
  /** Discount amount */
  amount?: Maybe<Scalars['Decimal']>;
  /** Discount amount with tax */
  amountWithTax?: Maybe<Scalars['Decimal']>;
  /** Coupon */
  coupon?: Maybe<Scalars['String']>;
  /** Value of discount description */
  description?: Maybe<Scalars['String']>;
  /** Discount amount in the specified currency */
  moneyAmount?: Maybe<MoneyType>;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax?: Maybe<MoneyType>;
  promotion?: Maybe<Promotion>;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars['String']>;
};

export type Category = {
  /** Breadcrumbs */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  childCategories?: Maybe<Array<Maybe<Category>>>;
  /** SKU of category. */
  code: Scalars['String'];
  description?: Maybe<CategoryDescriptionType>;
  descriptions?: Maybe<Array<Maybe<CategoryDescriptionType>>>;
  /** Have a parent */
  hasParent?: Maybe<Scalars['Boolean']>;
  /** Id of category. */
  id: Scalars['String'];
  /** Images */
  images?: Maybe<Array<Maybe<ImageType>>>;
  /** The category image. */
  imgSrc?: Maybe<Scalars['String']>;
  /** Level in hierarchy */
  level?: Maybe<Scalars['Int']>;
  /** Name of category. */
  name: Scalars['String'];
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars['String']>;
  /** Outlines */
  outlines?: Maybe<Array<Maybe<OutlineType>>>;
  parent?: Maybe<Category>;
  /** Category path in to the requested catalog  (all parent categories names concatenated. E.g. (parent1/parent2)) */
  path?: Maybe<Scalars['String']>;
  /** The category priority. */
  priority: Scalars['Int'];
  properties?: Maybe<Array<Maybe<Property>>>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** Request related slug for category */
  slug?: Maybe<Scalars['String']>;
};


export type CategoryDescriptionArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type CategoryDescriptionsArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type CategoryPropertiesArgs = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A connection from an object to a list of objects of type `Category`. */
export type CategoryConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Category>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryDescriptionType = {
  /** Description text. */
  content: Scalars['String'];
  /** Description type. */
  descriptionType: Scalars['String'];
  /** Description ID. */
  id: Scalars['String'];
  /** Description language code. */
  languageCode: Scalars['String'];
};

/** An edge in a connection from an object to another object of type `Category`. */
export type CategoryEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Category>;
};

export type ChangeQuoteCommentCommandType = {
  comment: Scalars['String'];
  quoteId: Scalars['String'];
};

export type ChangeQuoteItemQuantityCommandType = {
  lineItemId: Scalars['String'];
  quantity: Scalars['Int'];
  quoteId: Scalars['String'];
};

export type ChildCategoriesQueryResponseType = {
  childCategories?: Maybe<Array<Maybe<Category>>>;
};

export type CommonVendor = {
  /** Vendor ID */
  id: Scalars['String'];
  /** Vendor name */
  name: Scalars['String'];
  /** Vendor rating */
  rating?: Maybe<Rating>;
};

/** A connection from an object to a list of objects of type `Contact`. */
export type ContactConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ContactEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ContactType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Contact`. */
export type ContactEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ContactType>;
};

export type ContactType = {
  about: Scalars['String'];
  addresses?: Maybe<MemberAddressConnection>;
  birthDate?: Maybe<Scalars['Date']>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressType>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressType>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']>>;
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  groups: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  /** Member type */
  memberType: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  organizations?: Maybe<OrganizationConnection>;
  organizationsIds: Array<Maybe<Scalars['String']>>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']>>;
  securityAccounts?: Maybe<Array<Maybe<UserType>>>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String'];
  /** Status */
  status?: Maybe<Scalars['String']>;
};


export type ContactTypeAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type ContactTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};


export type ContactTypeOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  searchPhrase?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type ContactTypeSeoInfoArgs = {
  cultureName: Scalars['String'];
  storeId: Scalars['String'];
};

export type CountryRegionType = {
  /** Code of country region. For example 'AL'. */
  id: Scalars['String'];
  /** Name of country region. For example 'Alabama'. */
  name: Scalars['String'];
};

export type CountryType = {
  /** Code of country. For example 'USA'. */
  id: Scalars['String'];
  /** Name of country. For example 'United States of America'. */
  name: Scalars['String'];
  regions?: Maybe<Array<Maybe<CountryRegionType>>>;
};

export type CouponType = {
  /** Coupon code */
  code?: Maybe<Scalars['String']>;
  /** Is coupon was applied successfully */
  isAppliedSuccessfully?: Maybe<Scalars['Boolean']>;
};

export type CreateCustomerReviewCommandType = {
  entityId: Scalars['String'];
  entityName: Scalars['String'];
  entityType: Scalars['String'];
  rating: Scalars['Int'];
  review: Scalars['String'];
  storeId: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type CreateQuoteFromCartCommandType = {
  cartId: Scalars['String'];
  comment: Scalars['String'];
};

export type CurrencyType = {
  /** Currency code may be used ISO 4217 */
  code: Scalars['String'];
  /** Currency custom formatting */
  customFormatting?: Maybe<Scalars['String']>;
  /** Exchange rate */
  exchangeRate?: Maybe<Scalars['Decimal']>;
  /** Symbol */
  symbol?: Maybe<Scalars['String']>;
};

export type CustomIdentityResultType = {
  /** The errors that occurred during the identity operation. */
  errors?: Maybe<Array<Maybe<IdentityErrorInfoType>>>;
  succeeded: Scalars['Boolean'];
};

/** A connection from an object to a list of objects of type `CustomerOrder`. */
export type CustomerOrderConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CustomerOrderEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CustomerOrderType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `CustomerOrder`. */
export type CustomerOrderEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CustomerOrderType>;
};

export type CustomerOrderType = {
  addresses: Array<Maybe<OrderAddressType>>;
  /** Available payment methods */
  availablePaymentMethods?: Maybe<Array<Maybe<OrderPaymentMethodType>>>;
  cancelReason?: Maybe<Scalars['String']>;
  cancelledDate?: Maybe<Scalars['DateTime']>;
  channelId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate: Scalars['DateTime'];
  currency?: Maybe<CurrencyType>;
  customerId: Scalars['String'];
  customerName?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<MoneyType>;
  discountTotal?: Maybe<MoneyType>;
  discountTotalWithTax?: Maybe<MoneyType>;
  discounts?: Maybe<Array<Maybe<OrderDiscountType>>>;
  /** Customer order dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  employeeId?: Maybe<Scalars['String']>;
  employeeName?: Maybe<Scalars['String']>;
  fee?: Maybe<MoneyType>;
  feeTotal: Scalars['Decimal'];
  feeTotalWithTax: Scalars['Decimal'];
  feeWithTax: Scalars['Decimal'];
  id: Scalars['String'];
  inPayments: Array<Maybe<PaymentInType>>;
  isApproved: Scalars['Boolean'];
  isCancelled: Scalars['Boolean'];
  isPrototype: Scalars['Boolean'];
  items: Array<Maybe<OrderLineItemType>>;
  languageCode?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  number: Scalars['String'];
  objectType: Scalars['String'];
  operationType: Scalars['String'];
  organizationId?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  outerId?: Maybe<Scalars['String']>;
  parentOperationId?: Maybe<Scalars['String']>;
  paymentDiscountTotal?: Maybe<MoneyType>;
  paymentDiscountTotalWithTax?: Maybe<MoneyType>;
  paymentSubTotal?: Maybe<MoneyType>;
  paymentSubTotalWithTax?: Maybe<MoneyType>;
  paymentTaxTotal?: Maybe<MoneyType>;
  paymentTotal?: Maybe<MoneyType>;
  paymentTotalWithTax?: Maybe<MoneyType>;
  purchaseOrderNumber?: Maybe<Scalars['String']>;
  shipments?: Maybe<Array<Maybe<OrderShipmentType>>>;
  shippingDiscountTotal?: Maybe<MoneyType>;
  shippingDiscountTotalWithTax?: Maybe<MoneyType>;
  shippingSubTotal?: Maybe<MoneyType>;
  shippingSubTotalWithTax?: Maybe<MoneyType>;
  shippingTaxTotal?: Maybe<MoneyType>;
  shippingTotal?: Maybe<MoneyType>;
  shippingTotalWithTax?: Maybe<MoneyType>;
  shoppingCartId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  storeId: Scalars['String'];
  storeName?: Maybe<Scalars['String']>;
  subTotal?: Maybe<MoneyType>;
  subTotalDiscount?: Maybe<MoneyType>;
  subTotalDiscountWithTax?: Maybe<MoneyType>;
  subTotalTaxTotal?: Maybe<MoneyType>;
  subTotalWithTax?: Maybe<MoneyType>;
  subscriptionId?: Maybe<Scalars['String']>;
  subscriptionNumber?: Maybe<Scalars['String']>;
  taxDetails: Array<Maybe<OrderTaxDetailType>>;
  taxPercentRate: Scalars['Decimal'];
  taxTotal?: Maybe<MoneyType>;
  taxType?: Maybe<Scalars['String']>;
  total?: Maybe<MoneyType>;
};


export type CustomerOrderTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};


export type CustomerOrderTypeInPaymentsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type CustomerReview = {
  createdDate: Scalars['DateTime'];
  entityId: Scalars['String'];
  entityName: Scalars['String'];
  entityType: Scalars['String'];
  id: Scalars['String'];
  modifiedDate?: Maybe<Scalars['DateTime']>;
  rating: Scalars['Int'];
  review: Scalars['String'];
  reviewStatus?: Maybe<CustomerReviewStatus>;
  storeId: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
  userName: Scalars['String'];
};

/** A connection from an object to a list of objects of type `CustomerReview`. */
export type CustomerReviewConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<CustomerReviewEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<CustomerReview>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `CustomerReview`. */
export type CustomerReviewEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CustomerReview>;
};

export enum CustomerReviewStatus {
  Approved = 'APPROVED',
  New = 'NEW',
  Rejected = 'REJECTED'
}

export type DescriptionType = {
  /** Description text. */
  content?: Maybe<Scalars['String']>;
  /** Description ID. */
  id?: Maybe<Scalars['String']>;
  /** Description language code. */
  languageCode?: Maybe<Scalars['String']>;
  /** Description type. */
  reviewType?: Maybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `DictionaryItem`. */
export type DictionaryItemConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<DictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<DictionaryItemType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `DictionaryItem`. */
export type DictionaryItemEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<DictionaryItemType>;
};

export type DictionaryItemType = {
  /** Id */
  id: Scalars['String'];
  /** Localized dictionary item value */
  label?: Maybe<Scalars['String']>;
  /** Name */
  name: Scalars['String'];
};

export type DiscountType = {
  /** Discount amount */
  amount?: Maybe<Scalars['Decimal']>;
  /** Discount amount with tax */
  amountWithTax?: Maybe<Scalars['Decimal']>;
  /** Coupon */
  coupon?: Maybe<Scalars['String']>;
  /** Value of discount description */
  description?: Maybe<Scalars['String']>;
  /** Discount amount in the specified currency */
  moneyAmount?: Maybe<MoneyType>;
  /** Discount amount with tax in the specified currency */
  moneyAmountWithTax?: Maybe<MoneyType>;
  /** Value of promotion id */
  promotionId?: Maybe<Scalars['String']>;
};

export type DynamicContentItemType = {
  contentType: Scalars['String'];
  description: Scalars['String'];
  /** Dynamic content dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  id: Scalars['String'];
  name: Scalars['String'];
  priority: Scalars['Int'];
};


export type DynamicContentItemTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `DynamicProperty`. */
export type DynamicPropertyConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<DynamicPropertyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<DynamicPropertyType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `DynamicProperty`. */
export type DynamicPropertyEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<DynamicPropertyType>;
};

export type DynamicPropertyType = {
  dictionaryItems?: Maybe<DictionaryItemConnection>;
  /** The order for the dynamic property to display */
  displayOrder?: Maybe<Scalars['Int']>;
  /** Id */
  id: Scalars['String'];
  /** Is dynamic property value an array */
  isArray?: Maybe<Scalars['Boolean']>;
  /** Is dynamic property value a dictionary */
  isDictionary?: Maybe<Scalars['Boolean']>;
  /** Is dynamic property value multilingual */
  isMultilingual?: Maybe<Scalars['Boolean']>;
  /** Is dynamic property value required */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Localized property name */
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** Object type */
  objectType: Scalars['String'];
  /** Value type */
  valueType: Scalars['String'];
};


export type DynamicPropertyTypeDictionaryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DynamicPropertyValueType = {
  /** Associated dictionary item */
  dictionaryItem?: Maybe<DictionaryItemType>;
  /** Associated dynamic property */
  dynamicProperty?: Maybe<DynamicPropertyType>;
  /** Property name */
  name?: Maybe<Scalars['String']>;
  /** Property value */
  value?: Maybe<Scalars['DynamicPropertyValue']>;
  /** Value type */
  valueType?: Maybe<Scalars['String']>;
};

export type ErrorParameterType = {
  /** key */
  key: Scalars['String'];
  /** Value */
  value: Scalars['String'];
};

export type EvaluateDynamicContentResultType = {
  items?: Maybe<Array<Maybe<DynamicContentItemType>>>;
  totalCount: Scalars['Int'];
};

export type Facet = {
  /** Three facet types: Terms, Range, and Filter */
  facetType?: Maybe<FacetTypes>;
  /** Localized name of the facet. */
  label: Scalars['String'];
  /** The key/name  of the facet. */
  name: Scalars['String'];
};

export type FacetRangeType = {
  /** Amount of products for which the values in a field fall into the specified range */
  count?: Maybe<Scalars['Long']>;
  /** The range’s lower endpoint in number format, 0 represents infinity */
  from?: Maybe<Scalars['Long']>;
  /** The range’s lower endpoint in string format, empty string represents infinity */
  fromStr?: Maybe<Scalars['String']>;
  /** The flag indicates that From exclusive */
  includeFrom: Scalars['Boolean'];
  /** The flag indicates that To exclusive */
  includeTo: Scalars['Boolean'];
  /** is selected state */
  isSelected?: Maybe<Scalars['Boolean']>;
  /** Localization label */
  label?: Maybe<Scalars['String']>;
  /** Maximum value among all values contained within the range */
  max?: Maybe<Scalars['Long']>;
  /** Minimum value among all values contained within the range */
  min?: Maybe<Scalars['Long']>;
  /** The range’s upper endpoint in number format, 0 represents infinity */
  to?: Maybe<Scalars['Long']>;
  /** The range’s upper endpoint in string format, empty string represents infinity */
  toStr?: Maybe<Scalars['String']>;
  /** Sum of all values contained in the range */
  total?: Maybe<Scalars['Long']>;
};

export type FacetTermType = {
  /** count */
  count?: Maybe<Scalars['Long']>;
  /** is selected state */
  isSelected?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
  /** term */
  term?: Maybe<Scalars['String']>;
};

export enum FacetTypes {
  Filter = 'FILTER',
  Range = 'RANGE',
  Terms = 'TERMS'
}

export type FilterFacet = Facet & {
  /** The number of products matching the value specified in the filter facet expression */
  count: Scalars['Int'];
  /** The three types of facets. Terms, Range, Filter */
  facetType?: Maybe<FacetTypes>;
  /** Localized name of the facet. */
  label: Scalars['String'];
  /** The key/name  of the facet. */
  name: Scalars['String'];
};

export type FulfillmentCenterAddressType = {
  /** Address type */
  addressType?: Maybe<Scalars['Int']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['String']>;
  /** Id */
  key?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Company name */
  organization?: Maybe<Scalars['String']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Postal code */
  postalCode: Scalars['String'];
  /** Region id */
  regionId?: Maybe<Scalars['String']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']>;
  /** Zip */
  zip?: Maybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `FulfillmentCenter`. */
export type FulfillmentCenterConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<FulfillmentCenterEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<FulfillmentCenterType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `FulfillmentCenter`. */
export type FulfillmentCenterEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<FulfillmentCenterType>;
};

export type FulfillmentCenterType = {
  /** Fulfillment Center address. */
  address?: Maybe<FulfillmentCenterAddressType>;
  /** Fulfillment Center descripion. */
  description?: Maybe<Scalars['String']>;
  /** Fulfillment Center geo location. */
  geoLocation?: Maybe<Scalars['String']>;
  /** Fulfillment Center ID. */
  id: Scalars['String'];
  /** Fulfillment Center name. */
  name?: Maybe<Scalars['String']>;
  /** Nearest Fulfillment Centers */
  nearest?: Maybe<Array<Maybe<FulfillmentCenterType>>>;
  /** Fulfillment Center outerId. */
  outerId?: Maybe<Scalars['String']>;
  /** Fulfillment Center short description. */
  shortDescription?: Maybe<Scalars['String']>;
};


export type FulfillmentCenterTypeNearestArgs = {
  take?: InputMaybe<Scalars['Int']>;
};

export type GiftItemType = {
  /** Product category ID */
  categoryId?: Maybe<Scalars['String']>;
  /** Artificial ID for this value object */
  id: Scalars['String'];
  /** Value of reward image absolute URL */
  imageUrl?: Maybe<Scalars['String']>;
  /** Line item ID in case there is a gift in the cart. If there is no gift, it stays null */
  lineItemId?: Maybe<Scalars['String']>;
  /** Measurement unit */
  measureUnit?: Maybe<Scalars['String']>;
  /** Name of the reward */
  name: Scalars['String'];
  product?: Maybe<Product>;
  /** Product ID */
  productId?: Maybe<Scalars['String']>;
  /** Promotion ID */
  promotionId: Scalars['String'];
  /** Number of gifts in the reward */
  quantity: Scalars['Int'];
};

export type IdentityErrorInfoType = {
  /** Error code */
  code: Scalars['String'];
  /** Error description */
  description?: Maybe<Scalars['String']>;
  /** Error parameter */
  parameter?: Maybe<Scalars['String']>;
};

export type IdentityErrorType = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type IdentityResultType = {
  /** The errors that occurred during the identity operation. */
  errors?: Maybe<Array<Maybe<IdentityErrorType>>>;
  succeeded: Scalars['Boolean'];
};

export type ImageType = {
  /** Culture name */
  cultureName?: Maybe<Scalars['String']>;
  /** Image group */
  group?: Maybe<Scalars['String']>;
  /** Image ID */
  id?: Maybe<Scalars['String']>;
  /** Image name */
  name?: Maybe<Scalars['String']>;
  /** Image relative URL */
  relativeUrl?: Maybe<Scalars['String']>;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
  /** Image URL */
  url?: Maybe<Scalars['String']> | Maybe<Scalars['OptionalString']>;
};

export type InitializePaymentResultType = {
  actionHtmlForm?: Maybe<Scalars['String']>;
  actionRedirectUrl?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  orderId?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  paymentActionType?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  paymentMethodCode?: Maybe<Scalars['String']>;
  publicParameters?: Maybe<Array<Maybe<KeyValueType>>>;
  storeId?: Maybe<Scalars['String']>;
};

export type InputAddBulkItemsType = {
  cartId?: InputMaybe<Scalars['String']>;
  /** Bulk cart items */
  cartItems: Array<InputMaybe<InputNewBulkItemType>>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddCouponType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  /** Coupon code */
  couponCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddGiftItemsType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** IDs of gift rewards to add to the cart */
  ids: Array<InputMaybe<Scalars['String']>>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddItemType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  /** Comment */
  comment?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Price */
  price?: InputMaybe<Scalars['Decimal']>;
  /** Product ID */
  productId: Scalars['String'];
  /** Quantity */
  quantity: Scalars['Int'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddItemsType = {
  cartId?: InputMaybe<Scalars['String']>;
  /** Cart items */
  cartItems: Array<InputMaybe<InputNewCartItemType>>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddOrUpdateCartAddressType = {
  /** Address */
  address: InputAddressType;
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddOrUpdateCartPaymentType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Payment */
  payment: InputPaymentType;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddOrUpdateCartShipmentType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Shipment */
  shipment: InputShipmentType;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputAddOrUpdateOrderPaymentType = {
  /** Order ID */
  orderId: Scalars['String'];
  /** Payment */
  payment: InputOrderPaymentType;
};

export type InputAddWishlistBulkItemType = {
  /** Wish list ids */
  listIds: Array<InputMaybe<Scalars['String']>>;
  /** Product id to add */
  productId: Scalars['String'];
  /** Product quantity to add */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type InputAddWishlistItemType = {
  /** Wish list id */
  listId: Scalars['String'];
  /** Product id to add */
  productId: Scalars['String'];
  /** Product quantity to add */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type InputAddressType = {
  addressType?: InputMaybe<Scalars['Int']>;
  /** City */
  city?: InputMaybe<Scalars['OptionalString']>;
  /** Country code */
  countryCode?: InputMaybe<Scalars['OptionalString']>;
  /** Country */
  countryName?: InputMaybe<Scalars['OptionalString']>;
  /** Email */
  email?: InputMaybe<Scalars['OptionalString']>;
  /** First name */
  firstName?: InputMaybe<Scalars['OptionalString']>;
  /** ID */
  id?: InputMaybe<Scalars['String']>;
  /** ID */
  key?: InputMaybe<Scalars['OptionalString']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['OptionalString']>;
  /** Line1 */
  line1?: InputMaybe<Scalars['OptionalString']>;
  /** Line2 */
  line2?: InputMaybe<Scalars['OptionalString']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['OptionalString']>;
  /** Name */
  name?: InputMaybe<Scalars['OptionalString']>;
  /** Company name */
  organization?: InputMaybe<Scalars['OptionalString']>;
  /** Outer ID */
  outerId?: InputMaybe<Scalars['OptionalString']>;
  /** Phone */
  phone?: InputMaybe<Scalars['OptionalString']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['OptionalString']>;
  /** Region ID */
  regionId?: InputMaybe<Scalars['OptionalString']>;
  /** Region */
  regionName?: InputMaybe<Scalars['OptionalString']>;
  /** Zip */
  zip?: InputMaybe<Scalars['OptionalString']>;
};

export type InputApplicationUserLoginType = {
  loginProvider: Scalars['String'];
  providerKey: Scalars['String'];
};

export type InputAssignPermissionScopeType = {
  scope: Scalars['String'];
  type: Scalars['String'];
};

export type InputAssignPermissionType = {
  assignedScopes?: InputMaybe<Array<InputMaybe<InputAssignPermissionScopeType>>>;
  name: Scalars['String'];
};

export type InputAssignRoleType = {
  concurrencyStamp?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<InputMaybe<InputAssignPermissionType>>;
};

export type InputAuthorizePaymentType = {
  /** Order Id */
  orderId?: InputMaybe<Scalars['String']>;
  /** Input parameters */
  parameters?: InputMaybe<Array<InputMaybe<InputKeyValueType>>>;
  /** Payment Id */
  paymentId: Scalars['String'];
};

export type InputChangeCartItemCommentType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  /** Comment */
  comment: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Line item Id */
  lineItemId: Scalars['String'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputChangeCartItemPriceType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Line item Id */
  lineItemId: Scalars['String'];
  /** Price */
  price: Scalars['Decimal'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputChangeCartItemQuantityType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Line item Id */
  lineItemId: Scalars['String'];
  /** Quantity */
  quantity: Scalars['Int'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputChangeCommentType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  /** Comment */
  comment?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputChangeOrderStatusType = {
  /** Order ID */
  orderId: Scalars['String'];
  /** Order status */
  status: Scalars['String'];
};

export type InputChangeOrganizationContactRoleType = {
  /** Role IDs or names to be assigned to the user */
  roleIds?: InputMaybe<Array<Scalars['String']>>;
  /** User identifier to be changed */
  userId?: InputMaybe<Scalars['String']>;
};

export type InputChangePasswordType = {
  /** New password according with system security policy */
  newPassword: Scalars['String'];
  /** Old user password */
  oldPassword: Scalars['String'];
  /** User identifier */
  userId: Scalars['String'];
};

export type InputChangePurchaseOrderNumber = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Purchase Order Number */
  purchaseOrderNumber?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputClearCartType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputClearPaymentsType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputClearShipmentsType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputConfirmEmailType = {
  /** Confirm email token */
  token: Scalars['String'];
  /** User identifier */
  userId: Scalars['String'];
};

export type InputCreateApplicationUserType = {
  /** Username of the creator */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Date of user creation */
  createdDate?: InputMaybe<Scalars['DateTime']>;
  /** User Email */
  email: Scalars['String'];
  /** User ID */
  id?: InputMaybe<Scalars['String']>;
  /** Can user be locked out */
  lockoutEnabled?: InputMaybe<Scalars['Boolean']>;
  /** End date of lockout */
  lockoutEnd?: InputMaybe<Scalars['DateTime']>;
  /** External logins */
  logins?: InputMaybe<Array<InputMaybe<InputApplicationUserLoginType>>>;
  /** Id of the associated Member */
  memberId?: InputMaybe<Scalars['String']>;
  /** User password (nullable, for external logins) */
  password?: InputMaybe<Scalars['String']>;
  /** Password expiration date */
  passwordExpired?: InputMaybe<Scalars['Boolean']>;
  /** User phone number */
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Is user phone number confirmed */
  phoneNumberConfirmed?: InputMaybe<Scalars['Boolean']>;
  /** User photo URL */
  photoUrl?: InputMaybe<Scalars['String']>;
  /** List of user roles */
  roles?: InputMaybe<Array<InputMaybe<InputAssignRoleType>>>;
  /** Associated Store Id */
  storeId?: InputMaybe<Scalars['String']>;
  /** Is Two Factor Authentication enabled */
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']>;
  /** User name */
  userName: Scalars['String'];
  /** User type (Manager, Customer) */
  userType: Scalars['String'];
};

export type InputCreateContactType = {
  about?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  defaultLanguage?: InputMaybe<Scalars['String']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  memberType?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photoUrl?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

export type InputCreateOrderFromCartType = {
  /** Cart ID */
  cartId?: InputMaybe<Scalars['String']>;
};

export type InputCreateOrganizationType = {
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  memberType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InputCreateUserType = {
  /** Application user to create */
  applicationUser: InputCreateApplicationUserType;
};

export type InputCreateWishlistType = {
  /** Culture name */
  cultureName?: InputMaybe<Scalars['String']>;
  /** Currency code */
  currencyCode?: InputMaybe<Scalars['String']>;
  /** List name */
  listName?: InputMaybe<Scalars['String']>;
  /** Store ID */
  storeId: Scalars['String'];
  /** Owner ID */
  userId: Scalars['String'];
};

export type InputDeleteContactType = {
  contactId: Scalars['String'];
};

export type InputDeleteMemberAddressType = {
  addresses: Array<InputMaybe<InputMemberAddressType>>;
  memberId: Scalars['String'];
};

export type InputDeleteUserType = {
  userNames: Array<InputMaybe<Scalars['String']>>;
};

export type InputDynamicPropertyValueType = {
  /** Culture name ("en-US") for multilingual property */
  cultureName?: InputMaybe<Scalars['String']>;
  /** Language ("en-US") for multilingual property */
  locale?: InputMaybe<Scalars['String']>;
  /** Dynamic property name */
  name: Scalars['String'];
  /** Dynamic property value. ID must be passed for dictionary item */
  value?: InputMaybe<Scalars['DynamicPropertyValue']>;
};

export type InputInitializePaymentType = {
  /** Order Id */
  orderId?: InputMaybe<Scalars['String']>;
  /** Payment Id */
  paymentId: Scalars['String'];
};

export type InputInviteUserType = {
  /** Emails which will receive invites */
  emails: Array<Scalars['String']>;
  /** Optional message to include into email with instructions which invites persons will see */
  message?: InputMaybe<Scalars['String']>;
  /** ID of organization where contact will be added for user */
  organizationId: Scalars['String'];
  /** Role IDs or names to be assigned to the invited user */
  roleIds?: InputMaybe<Array<Scalars['String']>>;
  /** ID of store which will send invites */
  storeId: Scalars['String'];
  /** Optional URL suffix: you may provide here relative URL to your page which handle registration by invite */
  urlSuffix?: InputMaybe<Scalars['String']>;
};

export type InputKeyValueType = {
  /** Dictionary key */
  key: Scalars['String'];
  /** Dictionary value */
  value?: InputMaybe<Scalars['String']>;
};

export type InputLockUnlockOrganizationContactType = {
  userId?: InputMaybe<Scalars['String']>;
};

export type InputMemberAddressType = {
  addressType?: InputMaybe<Scalars['Int']>;
  /** City */
  city: Scalars['String'];
  /** Country code */
  countryCode: Scalars['String'];
  /** Country name */
  countryName?: InputMaybe<Scalars['String']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  /** Email */
  email?: InputMaybe<Scalars['String']>;
  /** First name */
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  /** key */
  key?: InputMaybe<Scalars['String']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['String']>;
  /** Line1 */
  line1: Scalars['String'];
  /** Line2 */
  line2?: InputMaybe<Scalars['String']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['String']>;
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  /** Company name */
  organization?: InputMaybe<Scalars['String']>;
  /** Outer id */
  outerId?: InputMaybe<Scalars['String']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Postal code */
  postalCode: Scalars['String'];
  /** Region id */
  regionId?: InputMaybe<Scalars['String']>;
  /** Region name */
  regionName?: InputMaybe<Scalars['String']>;
  /** Zip */
  zip?: InputMaybe<Scalars['String']>;
};

export type InputMergeCartType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Second cart Id */
  secondCartId: Scalars['String'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputMoveWishlistItemType = {
  /** Destination List ID */
  destinationListId: Scalars['String'];
  /** Line item ID to move */
  lineItemId: Scalars['String'];
  /** Source List ID */
  listId: Scalars['String'];
};

export type InputNewBulkItemType = {
  /** Product SKU */
  productSku: Scalars['String'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type InputNewCartItemType = {
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Product Id */
  productId: Scalars['String'];
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type InputOrderAddressType = {
  addressType?: InputMaybe<Scalars['Int']>;
  /** City */
  city?: InputMaybe<Scalars['OptionalString']>;
  /** Country code */
  countryCode?: InputMaybe<Scalars['OptionalString']>;
  /** Country name */
  countryName?: InputMaybe<Scalars['OptionalString']>;
  /** Email */
  email?: InputMaybe<Scalars['OptionalString']>;
  /** First name */
  firstName?: InputMaybe<Scalars['OptionalString']>;
  /** ID */
  id?: InputMaybe<Scalars['String']>;
  /** Id */
  key?: InputMaybe<Scalars['OptionalString']>;
  /** Last name */
  lastName?: InputMaybe<Scalars['OptionalString']>;
  /** Line1 */
  line1?: InputMaybe<Scalars['OptionalString']>;
  /** Line2 */
  line2?: InputMaybe<Scalars['OptionalString']>;
  /** Middle name */
  middleName?: InputMaybe<Scalars['OptionalString']>;
  /** Name */
  name?: InputMaybe<Scalars['OptionalString']>;
  /** Company name */
  organization?: InputMaybe<Scalars['OptionalString']>;
  /** Outer id */
  outerId?: InputMaybe<Scalars['OptionalString']>;
  /** Phone */
  phone?: InputMaybe<Scalars['OptionalString']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['OptionalString']>;
  /** Region id */
  regionId?: InputMaybe<Scalars['OptionalString']>;
  /** Region name */
  regionName?: InputMaybe<Scalars['OptionalString']>;
  /** Zip */
  zip?: InputMaybe<Scalars['OptionalString']>;
};

export type InputOrderBankCardInfoType = {
  bankCardCVV2: Scalars['String'];
  bankCardMonth: Scalars['Int'];
  bankCardNumber: Scalars['String'];
  bankCardType: Scalars['String'];
  bankCardYear: Scalars['Int'];
  cardholderName: Scalars['String'];
};

export type InputOrderPaymentType = {
  amount?: InputMaybe<Scalars['OptionalDecimal']>;
  billingAddress?: InputMaybe<InputOrderAddressType>;
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']>;
  currency?: InputMaybe<Scalars['OptionalString']>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Payment ID */
  id?: InputMaybe<Scalars['OptionalString']>;
  /** Payment outer ID value */
  outerId?: InputMaybe<Scalars['OptionalString']>;
  /** Payment gateway code value */
  paymentGatewayCode?: InputMaybe<Scalars['OptionalString']>;
  price?: InputMaybe<Scalars['OptionalDecimal']>;
  /** Payment vendor ID value */
  vendorId?: InputMaybe<Scalars['OptionalString']>;
};

export type InputPaymentType = {
  amount?: InputMaybe<Scalars['OptionalDecimal']>;
  billingAddress?: InputMaybe<InputAddressType>;
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']>;
  currency?: InputMaybe<Scalars['OptionalString']>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Payment ID */
  id?: InputMaybe<Scalars['OptionalString']>;
  /** Payment outer ID value */
  outerId?: InputMaybe<Scalars['OptionalString']>;
  /** Payment gateway code value */
  paymentGatewayCode?: InputMaybe<Scalars['OptionalString']>;
  price?: InputMaybe<Scalars['OptionalDecimal']>;
  purpose?: InputMaybe<Scalars['OptionalString']>;
  vendorId?: InputMaybe<Scalars['OptionalString']>;
};

export type InputPersonalDataType = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
};

export type InputProcessOrderPaymentType = {
  /** Credit card details */
  bankCardInfo?: InputMaybe<InputOrderBankCardInfoType>;
  /** Order ID */
  orderId: Scalars['String'];
  /** Payment ID */
  paymentId: Scalars['String'];
};

export type InputQuoteAddressType = {
  addressType?: InputMaybe<Scalars['Int']>;
  city: Scalars['String'];
  countryCode?: InputMaybe<Scalars['String']>;
  countryName: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Company name */
  organization?: InputMaybe<Scalars['String']>;
  outerId?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  regionId?: InputMaybe<Scalars['String']>;
  regionName?: InputMaybe<Scalars['String']>;
};

export type InputRegisterAccountType = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type InputRegisterByInvitationType = {
  /** First name of person */
  firstName: Scalars['String'];
  /** Last name of person */
  lastName: Scalars['String'];
  /** Password */
  password: Scalars['String'];
  /** Phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Invitation token */
  token: Scalars['String'];
  /** ID of use created for invited email */
  userId: Scalars['String'];
  /** Username */
  username: Scalars['String'];
};

export type InputRegisterContactType = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<InputMemberAddressType>;
  birthdate?: InputMaybe<Scalars['Date']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type InputRegisterOrganizationType = {
  address?: InputMaybe<InputMemberAddressType>;
  description?: InputMaybe<Scalars['String']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  name: Scalars['String'];
};

export type InputRejectGiftItemsType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Ids of gift lineItems to reject from cart */
  ids: Array<InputMaybe<Scalars['String']>>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputRemoveCartAddressType = {
  /** Address Id */
  addressId: Scalars['String'];
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputRemoveCartType = {
  /** Cart Id */
  cartId: Scalars['String'];
  /** User Id */
  userId: Scalars['String'];
};

export type InputRemoveCouponType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  /** Coupon code */
  couponCode?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputRemoveItemType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Line item Id */
  lineItemId: Scalars['String'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputRemoveItemsType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Array of line item Id */
  lineItemIds: Array<InputMaybe<Scalars['String']>>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputRemoveMemberFromOrganizationType = {
  contactId?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
};

export type InputRemoveShipmentType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Shipment Id */
  shipmentId?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputRemoveWishlistItemType = {
  /** Line item ID to remove */
  lineItemId: Scalars['String'];
  /** List ID */
  listId: Scalars['String'];
};

export type InputRemoveWishlistType = {
  /** List ID */
  listId: Scalars['String'];
};

export type InputRenameWishlistType = {
  /** List ID */
  listId: Scalars['String'];
  /** New List name */
  listName?: InputMaybe<Scalars['String']>;
};

export type InputRequestRegistrationType = {
  /** Creating contact's account */
  account: InputRegisterAccountType;
  /** Creating contact */
  contact: InputRegisterContactType;
  /** Notification language code */
  languageCode?: InputMaybe<Scalars['String']>;
  /** company type */
  organization?: InputMaybe<InputRegisterOrganizationType>;
  /** Store ID */
  storeId: Scalars['String'];
};

export type InputResetPasswordByTokenType = {
  /** New password according with system security policy */
  newPassword: Scalars['String'];
  /** User password reset token */
  token: Scalars['String'];
  /** User identifier */
  userId: Scalars['String'];
};

export type InputSendVerifyEmailType = {
  email?: InputMaybe<Scalars['String']>;
  /** Notification language code */
  languageCode?: InputMaybe<Scalars['String']>;
  /** Store ID */
  storeId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type InputShipmentType = {
  /** Text comment */
  comment?: InputMaybe<Scalars['OptionalString']>;
  /** Currency value */
  currency?: InputMaybe<Scalars['OptionalString']>;
  /** Delivery address */
  deliveryAddress?: InputMaybe<InputAddressType>;
  /** Dynamic properties */
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  /** Fulfillment center iD */
  fulfillmentCenterId?: InputMaybe<Scalars['OptionalString']>;
  /** Height value */
  height?: InputMaybe<Scalars['OptionalNullableDecimal']>;
  /** Shipment ID */
  id?: InputMaybe<Scalars['OptionalString']>;
  /** Length value */
  length?: InputMaybe<Scalars['OptionalNullableDecimal']>;
  /** Measurement unit value */
  measureUnit?: InputMaybe<Scalars['OptionalString']>;
  /** Price value */
  price?: InputMaybe<Scalars['OptionalDecimal']>;
  /** Shipping method code */
  shipmentMethodCode?: InputMaybe<Scalars['OptionalString']>;
  /** Shipping method option */
  shipmentMethodOption?: InputMaybe<Scalars['OptionalString']>;
  /** Vendor ID */
  vendorId?: InputMaybe<Scalars['OptionalString']>;
  /** Volumetric weight value */
  volumetricWeight?: InputMaybe<Scalars['OptionalNullableDecimal']>;
  /** Weight value */
  weight?: InputMaybe<Scalars['OptionalNullableDecimal']>;
  /** Weight unit value */
  weightUnit?: InputMaybe<Scalars['OptionalString']>;
  /** Width value */
  width?: InputMaybe<Scalars['OptionalNullableDecimal']>;
};

export type InputUpdateApplicationUserType = {
  /** Failed login attempts for the current user */
  accessFailedCount?: InputMaybe<Scalars['Int']>;
  /** User Email */
  email: Scalars['String'];
  /** User ID */
  id: Scalars['String'];
  /** Can user be locked out */
  lockoutEnabled?: InputMaybe<Scalars['Boolean']>;
  /** End date of lockout */
  lockoutEnd?: InputMaybe<Scalars['DateTime']>;
  /** Id of the associated Memeber */
  memberId?: InputMaybe<Scalars['String']>;
  /** Password Hash */
  passwordHash?: InputMaybe<Scalars['String']>;
  /** User phone number */
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Is user phone number confirmed */
  phoneNumberConfirmed?: InputMaybe<Scalars['Boolean']>;
  /** User photo URL */
  photoUrl?: InputMaybe<Scalars['String']>;
  /** List of user roles */
  roles?: InputMaybe<Array<InputMaybe<InputAssignRoleType>>>;
  /** SecurityStamp */
  securityStamp: Scalars['String'];
  /** Associated Store Id */
  storeId?: InputMaybe<Scalars['String']>;
  /** Is Two Factor Authentication enabled */
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']>;
  /** User name */
  userName: Scalars['String'];
  /** User type (Manager, Customer) */
  userType: Scalars['String'];
};

export type InputUpdateCartDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputUpdateCartItemDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  /** Line item Id */
  lineItemId: Scalars['String'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputUpdateCartPaymentDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  /** Payment Id */
  paymentId: Scalars['String'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputUpdateCartShipmentDynamicPropertiesType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  /** Dynamic properties */
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  /** Shipment Id */
  shipmentId: Scalars['String'];
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InputUpdateContactType = {
  about?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  defaultLanguage?: InputMaybe<Scalars['String']>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  firstName: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  memberType?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photoUrl?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

export type InputUpdateMemberAddressType = {
  addresses: Array<InputMaybe<InputMemberAddressType>>;
  memberId: Scalars['String'];
};

export type InputUpdateMemberDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  memberId: Scalars['String'];
};

export type InputUpdateOrderDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']>;
};

export type InputUpdateOrderItemDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  lineItemId?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
};

export type InputUpdateOrderPaymentDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
};

export type InputUpdateOrderShipmentDynamicPropertiesType = {
  dynamicProperties: Array<InputMaybe<InputDynamicPropertyValueType>>;
  orderId?: InputMaybe<Scalars['String']>;
  shipmentId?: InputMaybe<Scalars['String']>;
};

export type InputUpdateOrganizationType = {
  addresses?: InputMaybe<Array<InputMaybe<InputMemberAddressType>>>;
  dynamicProperties?: InputMaybe<Array<InputMaybe<InputDynamicPropertyValueType>>>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  memberType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InputUpdatePersonalDataType = {
  personalData: InputPersonalDataType;
};

export type InputUpdateRoleInnerType = {
  /** Concurrency Stamp */
  concurrencyStamp?: InputMaybe<Scalars['String']>;
  /** Role description */
  description?: InputMaybe<Scalars['String']>;
  /** Role ID */
  id: Scalars['String'];
  /** Role name */
  name: Scalars['String'];
  /** List of Role permissions */
  permissions: Array<InputMaybe<InputAssignPermissionType>>;
};

export type InputUpdateRoleType = {
  /** Role to update */
  role: InputUpdateRoleInnerType;
};

export type InputUpdateUserType = {
  /** Application user to update */
  applicationUser: InputUpdateApplicationUserType;
};

export type InputUpdateWishlistItemsType = {
  /** Bulk wishlist items */
  items: Array<InputMaybe<InputUpdateWishlistLineItemType>>;
  /** Wish list id */
  listId: Scalars['String'];
};

export type InputUpdateWishlistLineItemType = {
  /** Line Item Id to update */
  lineItemId: Scalars['String'];
  /** Product quantity to add */
  quantity: Scalars['Int'];
};

export type InputValidateCouponType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  /** Coupon */
  coupon: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type InventoryInfo = {
  /** Allow backorder */
  allowBackorder?: Maybe<Scalars['Boolean']>;
  /** Allow preorder */
  allowPreorder?: Maybe<Scalars['Boolean']>;
  /** Backorder availability date */
  backorderAvailabilityDate?: Maybe<Scalars['DateTime']>;
  fulfillmentCenterId: Scalars['String'];
  fulfillmentCenterName: Scalars['String'];
  /** Inventory in stock quantity */
  inStockQuantity?: Maybe<Scalars['Long']>;
  /** Preorder availability date */
  preorderAvailabilityDate?: Maybe<Scalars['DateTime']>;
  /** Inventory reserved quantity */
  reservedQuantity?: Maybe<Scalars['Long']>;
};

export type KeyValueType = {
  /** Dictionary key */
  key: Scalars['String'];
  /** Dictionary value */
  value?: Maybe<Scalars['String']>;
};

export type LineItemType = {
  /** Catalog ID value */
  catalogId?: Maybe<Scalars['String']>;
  /** Category ID value */
  categoryId?: Maybe<Scalars['String']>;
  /** Line item create date */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** Discount amount */
  discountAmount?: Maybe<MoneyType>;
  /** Discount amount with tax */
  discountAmountWithTax?: Maybe<MoneyType>;
  /** Total discount */
  discountTotal?: Maybe<MoneyType>;
  /** Total discount with tax */
  discountTotalWithTax?: Maybe<MoneyType>;
  /** Discounts */
  discounts?: Maybe<Array<Maybe<DiscountType>>>;
  /** Cart line item dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  /** Extended price */
  extendedPrice?: Maybe<MoneyType>;
  /** Extended price with tax */
  extendedPriceWithTax?: Maybe<MoneyType>;
  /** Line item fulfillment center ID value */
  fulfillmentCenterId?: Maybe<Scalars['String']>;
  /** Line item fulfillment center name value */
  fulfillmentCenterName?: Maybe<Scalars['String']>;
  /** Height value */
  height?: Maybe<Scalars['Decimal']>;
  /** Line item ID */
  id: Scalars['String'];
  /** Value of line item image absolute URL */
  imageUrl?: Maybe<Scalars['String']>;
  /** In stock quantity */
  inStockQuantity?: Maybe<Scalars['Int']>;
  /** flag of line item is a gift */
  isGift?: Maybe<Scalars['Boolean']>;
  /** Shows whether this is read-only */
  isReadOnly?: Maybe<Scalars['Boolean']>;
  /** Shows whether the line item is recurring */
  isReccuring?: Maybe<Scalars['Boolean']>;
  /** Shows whether this is valid */
  isValid?: Maybe<Scalars['Boolean']>;
  /** Culture name in the ISO 3166-1 alpha-3 format */
  languageCode?: Maybe<Scalars['String']>;
  /** Length value */
  length?: Maybe<Scalars['Decimal']>;
  /** List price */
  listPrice?: Maybe<MoneyType>;
  /** List price with tax */
  listPriceWithTax?: Maybe<MoneyType>;
  /** Measurement unit value */
  measureUnit?: Maybe<Scalars['String']>;
  /** Line item name value */
  name?: Maybe<Scalars['String']>;
  /** Line item comment value */
  note?: Maybe<Scalars['String']>;
  /** Line item quantity value */
  objectType?: Maybe<Scalars['String']>;
  /** Placed price */
  placedPrice?: Maybe<MoneyType>;
  /** Placed price with tax */
  placedPriceWithTax?: Maybe<MoneyType>;
  product?: Maybe<Product>;
  /** Product ID value */
  productId?: Maybe<Scalars['String']>;
  /** Product type: Physical, Digital, or Subscription */
  productType?: Maybe<Scalars['String']>;
  /** Line item quantity value */
  quantity?: Maybe<Scalars['Int']>;
  /** Requirement for line item shipping */
  requiredShipping?: Maybe<Scalars['Boolean']>;
  /** Sale price */
  salePrice?: Maybe<MoneyType>;
  /** Sale price with tax */
  salePriceWithTax?: Maybe<MoneyType>;
  /** Line item shipping method code value */
  shipmentMethodCode?: Maybe<Scalars['String']>;
  /** Product SKU value */
  sku?: Maybe<Scalars['String']>;
  /** Tax details */
  taxDetails?: Maybe<Array<Maybe<TaxDetailType>>>;
  /** Total shipping tax amount value */
  taxPercentRate?: Maybe<Scalars['Decimal']>;
  /** Tax total */
  taxTotal?: Maybe<MoneyType>;
  /** Shipping tax type value */
  taxType?: Maybe<Scalars['String']>;
  /** Value of line item thumbnail image absolute URL */
  thumbnailImageUrl?: Maybe<Scalars['String']>;
  /** Validation errors */
  validationErrors?: Maybe<Array<Maybe<ValidationErrorType>>>;
  vendor?: Maybe<CommonVendor>;
  /** Volumetric weight value */
  volumetricWeight?: Maybe<Scalars['Decimal']>;
  /** Warehouse location */
  warehouseLocation?: Maybe<Scalars['String']>;
  /** Shopping cart weight value */
  weight?: Maybe<Scalars['Decimal']>;
  /** Weight unit value */
  weightUnit?: Maybe<Scalars['String']>;
  /** Width value */
  width?: Maybe<Scalars['Decimal']>;
};


export type LineItemTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `MemberAddress`. */
export type MemberAddressConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<MemberAddressEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<MemberAddressType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `MemberAddress`. */
export type MemberAddressEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<MemberAddressType>;
};

export type MemberAddressType = {
  addressType?: Maybe<Scalars['Int']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['String']>;
  /** Is default address or not */
  isDefault: Scalars['Boolean'];
  /** Id */
  key?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Company name */
  organization?: Maybe<Scalars['String']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Postal code */
  postalCode: Scalars['String'];
  /** Region id */
  regionId?: Maybe<Scalars['String']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']>;
  /** Zip */
  zip?: Maybe<Scalars['String']>;
};

export type MemberType = {
  addresses?: Maybe<MemberAddressConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressType>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressType>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']>>;
  groups: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
  /** Member type */
  memberType: Scalars['String'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']>>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String'];
  /** Status */
  status?: Maybe<Scalars['String']>;
};


export type MemberTypeAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type MemberTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};


export type MemberTypeSeoInfoArgs = {
  cultureName: Scalars['String'];
  storeId: Scalars['String'];
};

export type MenuLinkListType = {
  items?: Maybe<Array<Maybe<MenuLinkType>>>;
  /** Menu name */
  name?: Maybe<Scalars['String']>;
  /** Menu outer ID */
  outerId?: Maybe<Scalars['String']>;
};

export type MenuLinkType = {
  /** Menu item object ID */
  associatedObjectId?: Maybe<Scalars['String']>;
  /** Menu item object name */
  associatedObjectName?: Maybe<Scalars['String']>;
  /** Menu item type name */
  associatedObjectType?: Maybe<Scalars['String']>;
  childItems?: Maybe<Array<Maybe<MenuLinkType>>>;
  /** Menu item outerID */
  outerId?: Maybe<Scalars['String']>;
  /** Menu item priority */
  priority?: Maybe<Scalars['Int']>;
  /** Menu item title */
  title?: Maybe<Scalars['String']>;
  /** Menu item url */
  url?: Maybe<Scalars['String']>;
};

export type MoneyType = {
  /** A decimal with the amount rounded to the significant number of decimal digits. */
  amount: Scalars['Decimal'];
  /** Currency type */
  currency?: Maybe<CurrencyType>;
  /** Number of decimal digits for the associated currency. */
  decimalDigits: Scalars['Int'];
  /** Formatted amount. */
  formattedAmount: Scalars['String'];
  /** Formatted amount without currency. */
  formattedAmountWithoutCurrency: Scalars['String'];
  /** Formatted amount without point. */
  formattedAmountWithoutPoint: Scalars['String'];
  /** Formatted amount without point and currency. */
  formattedAmountWithoutPointAndCurrency: Scalars['String'];
};

export type Mutations = {
  addBulkItemsCart?: Maybe<BulkCartType>;
  addCartAddress?: Maybe<CartType>;
  addCoupon?: Maybe<CartType>;
  addGiftItems?: Maybe<CartType>;
  addItem?: Maybe<CartType>;
  addItemsCart?: Maybe<CartType>;
  addOrUpdateCartAddress?: Maybe<CartType>;
  addOrUpdateCartPayment?: Maybe<CartType>;
  addOrUpdateCartShipment?: Maybe<CartType>;
  addOrUpdateOrderPayment?: Maybe<CustomerOrderType>;
  addWishlistBulkItem?: Maybe<BulkWishlistType>;
  addWishlistItem?: Maybe<WishlistType>;
  authorizePayment?: Maybe<AuthorizePaymentResultType>;
  cancelQuoteRequest?: Maybe<QuoteType>;
  changeCartItemComment?: Maybe<CartType>;
  changeCartItemPrice?: Maybe<CartType>;
  changeCartItemQuantity?: Maybe<CartType>;
  changeComment?: Maybe<CartType>;
  changeOrderStatus?: Maybe<Scalars['Boolean']>;
  changeOrganizationContactRole?: Maybe<CustomIdentityResultType>;
  changePassword?: Maybe<CustomIdentityResultType>;
  changePurchaseOrderNumber?: Maybe<CartType>;
  changeQuoteComment?: Maybe<QuoteType>;
  changeQuoteItemQuantity?: Maybe<QuoteType>;
  clearCart?: Maybe<CartType>;
  clearPayments?: Maybe<CartType>;
  clearShipments?: Maybe<CartType>;
  confirmEmail?: Maybe<CustomIdentityResultType>;
  createContact?: Maybe<ContactType>;
  createCustomerReview?: Maybe<CustomerReview>;
  createOrderFromCart?: Maybe<CustomerOrderType>;
  createOrganization?: Maybe<Organization>;
  createQuoteFromCart?: Maybe<QuoteType>;
  createUser?: Maybe<IdentityResultType>;
  createWishlist?: Maybe<WishlistType>;
  deleteContact?: Maybe<Scalars['Boolean']>;
  deleteMemberAddresses?: Maybe<MemberType>;
  deleteUsers?: Maybe<IdentityResultType>;
  initializePayment?: Maybe<InitializePaymentResultType>;
  inviteUser?: Maybe<CustomIdentityResultType>;
  lockOrganizationContact?: Maybe<ContactType>;
  mergeCart?: Maybe<CartType>;
  moveWishlistItem?: Maybe<WishlistType>;
  /** @deprecated Obsolete. Use 'initializePayment' mutation */
  processOrderPayment?: Maybe<ProcessPaymentRequestResultType>;
  refreshCart?: Maybe<CartType>;
  registerByInvitation?: Maybe<CustomIdentityResultType>;
  rejectGiftItems?: Maybe<CartType>;
  removeCart?: Maybe<Scalars['Boolean']>;
  removeCartAddress?: Maybe<CartType>;
  removeCartItem?: Maybe<CartType>;
  removeCartItems?: Maybe<CartType>;
  removeCoupon?: Maybe<CartType>;
  removeMemberFromOrganization?: Maybe<ContactType>;
  removeQuoteItem?: Maybe<QuoteType>;
  removeShipment?: Maybe<CartType>;
  removeWishlist?: Maybe<Scalars['Boolean']>;
  removeWishlistItem?: Maybe<WishlistType>;
  renameWishlist?: Maybe<WishlistType>;
  requestRegistration?: Maybe<RequestRegistrationType>;
  resetPasswordByToken?: Maybe<CustomIdentityResultType>;
  sendVerifyEmail?: Maybe<Scalars['Boolean']>;
  submitQuoteRequest?: Maybe<QuoteType>;
  unlockOrganizationContact?: Maybe<ContactType>;
  updateCartDynamicProperties?: Maybe<CartType>;
  updateCartItemDynamicProperties?: Maybe<CartType>;
  updateCartPaymentDynamicProperties?: Maybe<CartType>;
  updateCartShipmentDynamicProperties?: Maybe<CartType>;
  updateContact?: Maybe<ContactType>;
  updateMemberAddresses?: Maybe<MemberType>;
  updateMemberDynamicProperties?: Maybe<MemberType>;
  updateOrderDynamicProperties?: Maybe<CustomerOrderType>;
  updateOrderItemDynamicProperties?: Maybe<CustomerOrderType>;
  updateOrderPaymentDynamicProperties?: Maybe<CustomerOrderType>;
  updateOrderShipmentDynamicProperties?: Maybe<CustomerOrderType>;
  updateOrganization?: Maybe<Organization>;
  updatePersonalData?: Maybe<IdentityResultType>;
  updateQuoteAddresses?: Maybe<QuoteType>;
  updateRole?: Maybe<IdentityResultType>;
  updateUser?: Maybe<IdentityResultType>;
  updateWishListItems?: Maybe<WishlistType>;
  validateCoupon?: Maybe<Scalars['Boolean']>;
};


export type MutationsAddBulkItemsCartArgs = {
  command: InputAddBulkItemsType;
};


export type MutationsAddCartAddressArgs = {
  command: InputAddOrUpdateCartAddressType;
};


export type MutationsAddCouponArgs = {
  command: InputAddCouponType;
};


export type MutationsAddGiftItemsArgs = {
  command: InputAddGiftItemsType;
};


export type MutationsAddItemArgs = {
  command: InputAddItemType;
};


export type MutationsAddItemsCartArgs = {
  command: InputAddItemsType;
};


export type MutationsAddOrUpdateCartAddressArgs = {
  command: InputAddOrUpdateCartAddressType;
};


export type MutationsAddOrUpdateCartPaymentArgs = {
  command: InputAddOrUpdateCartPaymentType;
};


export type MutationsAddOrUpdateCartShipmentArgs = {
  command: InputAddOrUpdateCartShipmentType;
};


export type MutationsAddOrUpdateOrderPaymentArgs = {
  command: InputAddOrUpdateOrderPaymentType;
};


export type MutationsAddWishlistBulkItemArgs = {
  command: InputAddWishlistBulkItemType;
};


export type MutationsAddWishlistItemArgs = {
  command: InputAddWishlistItemType;
};


export type MutationsAuthorizePaymentArgs = {
  command: InputAuthorizePaymentType;
};


export type MutationsCancelQuoteRequestArgs = {
  command: CancelQuoteCommandType;
};


export type MutationsChangeCartItemCommentArgs = {
  command?: InputMaybe<InputChangeCartItemCommentType>;
};


export type MutationsChangeCartItemPriceArgs = {
  command: InputChangeCartItemPriceType;
};


export type MutationsChangeCartItemQuantityArgs = {
  command: InputChangeCartItemQuantityType;
};


export type MutationsChangeCommentArgs = {
  command?: InputMaybe<InputChangeCommentType>;
};


export type MutationsChangeOrderStatusArgs = {
  command: InputChangeOrderStatusType;
};


export type MutationsChangeOrganizationContactRoleArgs = {
  command: InputChangeOrganizationContactRoleType;
};


export type MutationsChangePasswordArgs = {
  command?: InputMaybe<InputChangePasswordType>;
};


export type MutationsChangePurchaseOrderNumberArgs = {
  command?: InputMaybe<InputChangePurchaseOrderNumber>;
};


export type MutationsChangeQuoteCommentArgs = {
  command: ChangeQuoteCommentCommandType;
};


export type MutationsChangeQuoteItemQuantityArgs = {
  command: ChangeQuoteItemQuantityCommandType;
};


export type MutationsClearCartArgs = {
  command: InputClearCartType;
};


export type MutationsClearPaymentsArgs = {
  command: InputClearPaymentsType;
};


export type MutationsClearShipmentsArgs = {
  command: InputClearShipmentsType;
};


export type MutationsConfirmEmailArgs = {
  command: InputConfirmEmailType;
};


export type MutationsCreateContactArgs = {
  command: InputCreateContactType;
};


export type MutationsCreateCustomerReviewArgs = {
  command: CreateCustomerReviewCommandType;
};


export type MutationsCreateOrderFromCartArgs = {
  command: InputCreateOrderFromCartType;
};


export type MutationsCreateOrganizationArgs = {
  command: InputCreateOrganizationType;
};


export type MutationsCreateQuoteFromCartArgs = {
  command: CreateQuoteFromCartCommandType;
};


export type MutationsCreateUserArgs = {
  command: InputCreateUserType;
};


export type MutationsCreateWishlistArgs = {
  command: InputCreateWishlistType;
};


export type MutationsDeleteContactArgs = {
  command: InputDeleteContactType;
};


export type MutationsDeleteMemberAddressesArgs = {
  command: InputDeleteMemberAddressType;
};


export type MutationsDeleteUsersArgs = {
  command: InputDeleteUserType;
};


export type MutationsInitializePaymentArgs = {
  command: InputInitializePaymentType;
};


export type MutationsInviteUserArgs = {
  command: InputInviteUserType;
};


export type MutationsLockOrganizationContactArgs = {
  command: InputLockUnlockOrganizationContactType;
};


export type MutationsMergeCartArgs = {
  command: InputMergeCartType;
};


export type MutationsMoveWishlistItemArgs = {
  command: InputMoveWishlistItemType;
};


export type MutationsProcessOrderPaymentArgs = {
  command: InputProcessOrderPaymentType;
};


export type MutationsRefreshCartArgs = {
  command: RefreshCartType;
};


export type MutationsRegisterByInvitationArgs = {
  command: InputRegisterByInvitationType;
};


export type MutationsRejectGiftItemsArgs = {
  command: InputRejectGiftItemsType;
};


export type MutationsRemoveCartArgs = {
  command: InputRemoveCartType;
};


export type MutationsRemoveCartAddressArgs = {
  command: InputRemoveCartAddressType;
};


export type MutationsRemoveCartItemArgs = {
  command: InputRemoveItemType;
};


export type MutationsRemoveCartItemsArgs = {
  command: InputRemoveItemsType;
};


export type MutationsRemoveCouponArgs = {
  command: InputRemoveCouponType;
};


export type MutationsRemoveMemberFromOrganizationArgs = {
  command: InputRemoveMemberFromOrganizationType;
};


export type MutationsRemoveQuoteItemArgs = {
  command: RemoveQuoteItemCommandType;
};


export type MutationsRemoveShipmentArgs = {
  command: InputRemoveShipmentType;
};


export type MutationsRemoveWishlistArgs = {
  command: InputRemoveWishlistType;
};


export type MutationsRemoveWishlistItemArgs = {
  command: InputRemoveWishlistItemType;
};


export type MutationsRenameWishlistArgs = {
  command: InputRenameWishlistType;
};


export type MutationsRequestRegistrationArgs = {
  command: InputRequestRegistrationType;
};


export type MutationsResetPasswordByTokenArgs = {
  command?: InputMaybe<InputResetPasswordByTokenType>;
};


export type MutationsSendVerifyEmailArgs = {
  command?: InputMaybe<InputSendVerifyEmailType>;
};


export type MutationsSubmitQuoteRequestArgs = {
  command: SubmitQuoteCommandType;
};


export type MutationsUnlockOrganizationContactArgs = {
  command: InputLockUnlockOrganizationContactType;
};


export type MutationsUpdateCartDynamicPropertiesArgs = {
  command: InputUpdateCartDynamicPropertiesType;
};


export type MutationsUpdateCartItemDynamicPropertiesArgs = {
  command: InputUpdateCartItemDynamicPropertiesType;
};


export type MutationsUpdateCartPaymentDynamicPropertiesArgs = {
  command: InputUpdateCartPaymentDynamicPropertiesType;
};


export type MutationsUpdateCartShipmentDynamicPropertiesArgs = {
  command: InputUpdateCartShipmentDynamicPropertiesType;
};


export type MutationsUpdateContactArgs = {
  command: InputUpdateContactType;
};


export type MutationsUpdateMemberAddressesArgs = {
  command: InputUpdateMemberAddressType;
};


export type MutationsUpdateMemberDynamicPropertiesArgs = {
  command: InputUpdateMemberDynamicPropertiesType;
};


export type MutationsUpdateOrderDynamicPropertiesArgs = {
  command: InputUpdateOrderDynamicPropertiesType;
};


export type MutationsUpdateOrderItemDynamicPropertiesArgs = {
  command: InputUpdateOrderItemDynamicPropertiesType;
};


export type MutationsUpdateOrderPaymentDynamicPropertiesArgs = {
  command: InputUpdateOrderPaymentDynamicPropertiesType;
};


export type MutationsUpdateOrderShipmentDynamicPropertiesArgs = {
  command: InputUpdateOrderShipmentDynamicPropertiesType;
};


export type MutationsUpdateOrganizationArgs = {
  command: InputUpdateOrganizationType;
};


export type MutationsUpdatePersonalDataArgs = {
  command: InputUpdatePersonalDataType;
};


export type MutationsUpdateQuoteAddressesArgs = {
  command: UpdateQuoteAddressesCommandType;
};


export type MutationsUpdateRoleArgs = {
  command: InputUpdateRoleType;
};


export type MutationsUpdateUserArgs = {
  command: InputUpdateUserType;
};


export type MutationsUpdateWishListItemsArgs = {
  command: InputUpdateWishlistItemsType;
};


export type MutationsValidateCouponArgs = {
  command: InputValidateCouponType;
};

export type OrderAddressType = {
  /** Address type */
  addressType?: Maybe<Scalars['Int']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Country code */
  countryCode?: Maybe<Scalars['String']>;
  /** Country name */
  countryName?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['String']>;
  /** Id */
  key?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Line1 */
  line1?: Maybe<Scalars['String']>;
  /** Line2 */
  line2?: Maybe<Scalars['String']>;
  /** Middle name */
  middleName?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Company name */
  organization?: Maybe<Scalars['String']>;
  /** Outer id */
  outerId?: Maybe<Scalars['String']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Postal code */
  postalCode?: Scalars['String'];
  /** Region id */
  regionId?: Maybe<Scalars['String']>;
  /** Region name */
  regionName?: Maybe<Scalars['String']>;
  /** Zip */
  zip?: Maybe<Scalars['String']>;
};

export type OrderDiscountType = {
  /** Order discount amount */
  amount?: Maybe<MoneyType>;
  coupon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  promotionId?: Maybe<Scalars['String']>;
};

export type OrderLineItemType = {
  cancelReason?: Maybe<Scalars['String']>;
  cancelledDate?: Maybe<Scalars['DateTime']>;
  catalogId: Scalars['String'];
  categoryId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  currency?: Maybe<CurrencyType>;
  discountAmount?: Maybe<MoneyType>;
  discountAmountWithTax?: Maybe<MoneyType>;
  discountTotal?: Maybe<MoneyType>;
  discountTotalWithTax?: Maybe<MoneyType>;
  discounts: Array<Maybe<OrderDiscountType>>;
  /** Customer order Line item dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  extendedPrice?: Maybe<MoneyType>;
  extendedPriceWithTax?: Maybe<MoneyType>;
  fulfillmentCenterId?: Maybe<Scalars['String']>;
  fulfillmentCenterName?: Maybe<Scalars['String']>;
  fulfillmentLocationCode?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Decimal']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isCancelled: Scalars['Boolean'];
  isGift?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Decimal']>;
  measureUnit?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  objectType: Scalars['String'];
  outerId?: Maybe<Scalars['String']>;
  placedPrice?: Maybe<MoneyType>;
  placedPriceWithTax?: Maybe<MoneyType>;
  price?: Maybe<MoneyType>;
  priceId?: Maybe<Scalars['String']>;
  priceWithTax?: Maybe<MoneyType>;
  product?: Maybe<Product>;
  productId: Scalars['String'];
  productType?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  reserveQuantity: Scalars['Int'];
  shippingMethodCode?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  taxDetails: Array<Maybe<OrderTaxDetailType>>;
  taxPercentRate: Scalars['Decimal'];
  taxTotal?: Maybe<MoneyType>;
  taxType?: Maybe<Scalars['String']>;
  vendor?: Maybe<CommonVendor>;
  weight?: Maybe<Scalars['Decimal']>;
  weightUnit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Decimal']>;
};


export type OrderLineItemTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type OrderPaymentMethodType = {
  code: Scalars['String'];
  currency?: Maybe<CurrencyType>;
  description?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<MoneyType>;
  discountAmountWithTax?: Maybe<MoneyType>;
  isActive: Scalars['Boolean'];
  isAvailableForPartial: Scalars['Boolean'];
  logoUrl?: Maybe<Scalars['String']>;
  paymentMethodGroupType?: Maybe<Scalars['Int']>;
  paymentMethodType?: Maybe<Scalars['Int']>;
  price?: Maybe<MoneyType>;
  priceWithTax?: Maybe<MoneyType>;
  priority: Scalars['Int'];
  storeId: Scalars['String'];
  taxDetails?: Maybe<Array<Maybe<OrderTaxDetailType>>>;
  taxPercentRate: Scalars['Decimal'];
  taxTotal?: Maybe<MoneyType>;
  taxType?: Maybe<Scalars['String']>;
  total?: Maybe<MoneyType>;
  totalWithTax?: Maybe<MoneyType>;
  typeName: Scalars['String'];
};

export type OrderShipmentItemType = {
  barCode?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lineItem?: Maybe<OrderLineItemType>;
  lineItemId: Scalars['String'];
  outerId?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
};

export type OrderShipmentPackageType = {
  barCode?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Decimal']>;
  id: Scalars['String'];
  items: Array<Maybe<OrderShipmentItemType>>;
  length?: Maybe<Scalars['Decimal']>;
  measureUnit: Scalars['String'];
  packageType?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Decimal']>;
  weightUnit: Scalars['String'];
  width?: Maybe<Scalars['Decimal']>;
};

export type OrderShipmentType = {
  cancelReason?: Maybe<Scalars['String']>;
  cancelledDate?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  currency?: Maybe<CurrencyType>;
  customerOrderId?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<OrderAddressType>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  discountAmount?: Maybe<MoneyType>;
  discountAmountWithTax?: Maybe<MoneyType>;
  discounts: Array<Maybe<OrderDiscountType>>;
  /** Customer order Shipment dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  employeeId?: Maybe<Scalars['String']>;
  employeeName?: Maybe<Scalars['String']>;
  fulfillmentCenterId?: Maybe<Scalars['String']>;
  fulfillmentCenterName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Decimal']>;
  id: Scalars['String'];
  inPayments: Array<Maybe<PaymentInType>>;
  isApproved: Scalars['Boolean'];
  isCancelled: Scalars['Boolean'];
  items: Array<Maybe<OrderShipmentItemType>>;
  length?: Maybe<Scalars['Decimal']>;
  measureUnit?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  objectType: Scalars['String'];
  operationType: Scalars['String'];
  organizationId?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  outerId?: Maybe<Scalars['String']>;
  packages: Array<Maybe<OrderShipmentPackageType>>;
  parentOperationId?: Maybe<Scalars['String']>;
  price?: Maybe<MoneyType>;
  priceWithTax?: Maybe<MoneyType>;
  shipmentMethodCode?: Maybe<Scalars['String']>;
  shipmentMethodOption?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<OrderShippingMethodType>;
  status?: Maybe<Scalars['String']>;
  taxDetails: Array<Maybe<OrderTaxDetailType>>;
  taxPercentRate: Scalars['Decimal'];
  taxTotal?: Maybe<MoneyType>;
  taxType?: Maybe<Scalars['String']>;
  total?: Maybe<MoneyType>;
  totalWithTax?: Maybe<MoneyType>;
  trackingNumber?: Maybe<Scalars['String']>;
  trackingUrl?: Maybe<Scalars['String']>;
  vendor?: Maybe<CommonVendor>;
  weight?: Maybe<Scalars['Decimal']>;
  weightUnit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Decimal']>;
};


export type OrderShipmentTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type OrderShippingMethodType = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority: Scalars['Int'];
  storeId: Scalars['String'];
  taxType?: Maybe<Scalars['String']>;
  typeName: Scalars['String'];
};

export type OrderTaxDetailType = {
  amount?: Maybe<MoneyType>;
  name: Scalars['String'];
  rate?: Maybe<MoneyType>;
};

/** Organization info */
export type Organization = {
  addresses?: Maybe<MemberAddressConnection>;
  /** Business category */
  businessCategory?: Maybe<Scalars['String']>;
  contacts?: Maybe<ContactConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressType>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressType>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']>>;
  groups: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
  /** Member type */
  memberType: Scalars['String'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']>;
  /** Owner id */
  ownerId?: Maybe<Scalars['String']>;
  /** Parent id */
  parentId?: Maybe<Scalars['String']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']>>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String'];
  /** Status */
  status?: Maybe<Scalars['String']>;
};


/** Organization info */
export type OrganizationAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


/** Organization info */
export type OrganizationContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  searchPhrase?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


/** Organization info */
export type OrganizationDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};


/** Organization info */
export type OrganizationSeoInfoArgs = {
  cultureName: Scalars['String'];
  storeId: Scalars['String'];
};

/** A connection from an object to a list of objects of type `Organization`. */
export type OrganizationConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Organization>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Organization`. */
export type OrganizationEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Organization>;
};

export type OutlineItemType = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** SEO info */
  seoInfos?: Maybe<Array<Maybe<SeoInfo>>>;
  seoObjectType?: Maybe<Scalars['String']>;
};

export type OutlineType = {
  /** Outline items */
  items?: Maybe<Array<Maybe<OutlineItemType>>>;
};

/** A connection from an object to a list of objects of type `Page`. */
export type PageConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PageEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PageType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Page`. */
export type PageEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PageType>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PageType = {
  /** Page title */
  name?: Maybe<Scalars['String']>;
  /** Page relative url */
  relativeUrl?: Maybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `PaymentIn`. */
export type PaymentInConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PaymentInEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PaymentInType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `PaymentIn`. */
export type PaymentInEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PaymentInType>;
};

export type PaymentInType = {
  authorizedDate?: Maybe<Scalars['DateTime']>;
  billingAddress?: Maybe<OrderAddressType>;
  cancelReason?: Maybe<Scalars['String']>;
  cancelledDate?: Maybe<Scalars['DateTime']>;
  capturedDate?: Maybe<Scalars['DateTime']>;
  comment?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate: Scalars['DateTime'];
  currency?: Maybe<CurrencyType>;
  customerId: Scalars['String'];
  customerName?: Maybe<Scalars['String']>;
  /** Customer order Payment dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  gatewayCode?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  incomingDate?: Maybe<Scalars['DateTime']>;
  isApproved: Scalars['Boolean'];
  isCancelled: Scalars['Boolean'];
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  number: Scalars['String'];
  objectType: Scalars['String'];
  operationType: Scalars['String'];
  /** Associated Order */
  order: CustomerOrderType;
  orderId?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  outerId?: Maybe<Scalars['String']>;
  parentOperationId?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<OrderPaymentMethodType>;
  price?: Maybe<MoneyType>;
  purpose?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  sum?: Maybe<MoneyType>;
  tax?: Maybe<MoneyType>;
  transactions?: Maybe<Array<Maybe<PaymentTransactionType>>>;
  vendor?: Maybe<CommonVendor>;
  voidedDate?: Maybe<Scalars['DateTime']>;
};


export type PaymentInTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type PaymentMethodType = {
  /** Value of payment gateway code */
  code?: Maybe<Scalars['String']>;
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Payment method description */
  description?: Maybe<Scalars['String']>;
  /** Discount amount */
  discountAmount?: Maybe<MoneyType>;
  /** Discount amount with tax */
  discountAmountWithTax?: Maybe<MoneyType>;
  /** Is payment method available for partial payments */
  isAvailableForPartial?: Maybe<Scalars['Boolean']>;
  /** Value of payment method logo absolute URL */
  logoUrl?: Maybe<Scalars['String']>;
  /** Value of payment method name */
  name?: Maybe<Scalars['String']>;
  /** Value of payment group type */
  paymentMethodGroupType?: Maybe<Scalars['String']>;
  /** Value of payment method type */
  paymentMethodType?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<MoneyType>;
  /** Price with tax */
  priceWithTax?: Maybe<MoneyType>;
  /** Value of payment method priority */
  priority?: Maybe<Scalars['Int']>;
  /** Tax details */
  taxDetails?: Maybe<Array<Maybe<TaxDetailType>>>;
  /** Tax percent rate */
  taxPercentRate?: Maybe<Scalars['Decimal']>;
  /** Tax total */
  taxTotal?: Maybe<MoneyType>;
  /** Tax type */
  taxType?: Maybe<Scalars['String']>;
  /** Total */
  total?: Maybe<MoneyType>;
  /** Total with tax */
  totalWithTax?: Maybe<MoneyType>;
};

export type PaymentTransactionType = {
  amount?: Maybe<MoneyType>;
  gatewayIpAddress: Scalars['String'];
  id: Scalars['String'];
  isProcessed: Scalars['Boolean'];
  note: Scalars['String'];
  processAttemptCount: Scalars['Int'];
  processError?: Maybe<Scalars['String']>;
  processedDate?: Maybe<Scalars['DateTime']>;
  requestData: Scalars['String'];
  responseCode: Scalars['String'];
  responseData: Scalars['String'];
  status: Scalars['String'];
  type: Scalars['String'];
};

export type PaymentType = {
  /** Amount */
  amount?: Maybe<MoneyType>;
  /** Billing address */
  billingAddress?: Maybe<CartAddressType>;
  /** Text comment */
  comment?: Maybe<Scalars['String']>;
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Discount amount */
  discountAmount?: Maybe<MoneyType>;
  /** Discount amount with tax */
  discountAmountWithTax?: Maybe<MoneyType>;
  /** Discounts */
  discounts?: Maybe<Array<Maybe<DiscountType>>>;
  /** Cart payment dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  /** Payment Id */
  id?: Maybe<Scalars['String']>;
  /** Value of payment outer id */
  outerId?: Maybe<Scalars['String']>;
  /** Value of payment gateway code */
  paymentGatewayCode?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<MoneyType>;
  /** Price with tax */
  priceWithTax?: Maybe<MoneyType>;
  purpose?: Maybe<Scalars['String']>;
  /** Tax details */
  taxDetails?: Maybe<Array<Maybe<TaxDetailType>>>;
  /** Tax percent rate */
  taxPercentRate?: Maybe<Scalars['Decimal']>;
  /** Tax total */
  taxTotal?: Maybe<MoneyType>;
  /** Tax type */
  taxType?: Maybe<Scalars['String']>;
  /** Total */
  total?: Maybe<MoneyType>;
  /** Total with tax */
  totalWithTax?: Maybe<MoneyType>;
  vendor?: Maybe<CommonVendor>;
};


export type PaymentTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type PriceType = {
  /** Actual price */
  actual?: Maybe<MoneyType>;
  /** Actual price with tax */
  actualWithTax?: Maybe<MoneyType>;
  /** Currency */
  currency?: Maybe<Scalars['String']>;
  /** Discount amount */
  discountAmount?: Maybe<MoneyType>;
  /** Discount amount with tax */
  discountAmountWithTax?: Maybe<MoneyType>;
  discountPercent?: Maybe<Scalars['Decimal']>;
  /** Discounts */
  discounts?: Maybe<Array<Maybe<CatalogDiscountType>>>;
  /** End date */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Price list */
  list?: Maybe<MoneyType>;
  /** Price list with tax */
  listWithTax?: Maybe<MoneyType>;
  /** The product min qty */
  minQuantity?: Maybe<Scalars['Int']>;
  /** The product price list */
  pricelistId?: Maybe<Scalars['String']>;
  /** Sale price */
  sale?: Maybe<MoneyType>;
  /** Sale price with tax */
  saleWithTax?: Maybe<MoneyType>;
  /** Start date */
  startDate?: Maybe<Scalars['DateTime']>;
  /** Tier prices */
  tierPrices?: Maybe<Array<Maybe<TierPriceType>>>;
  /**
   * Valid from
   * @deprecated startDate
   */
  validFrom?: Maybe<Scalars['DateTime']>;
  /**
   * Valid until
   * @deprecated endDate
   */
  validUntil?: Maybe<Scalars['DateTime']>;
};

export type ProcessPaymentRequestResultType = {
  errorMessage?: Maybe<Scalars['String']>;
  htmlForm?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  /** New payment status */
  newPaymentStatus?: Maybe<Scalars['String']>;
  outerId?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

/** Products are the sellable goods in an e-commerce project. */
export type Product = {
  /** Assets */
  assets?: Maybe<Array<Maybe<Asset>>>;
  associations?: Maybe<ProductAssociationConnection>;
  /** Product availability data */
  availabilityData?: Maybe<AvailabilityData>;
  /** Get brandName for product. */
  brandName?: Maybe<Scalars['String']>;
  /** Breadcrumbs */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** The unique ID of the catalog */
  catalogId?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** The product SKU. */
  code: Scalars['String'];
  description?: Maybe<DescriptionType>;
  descriptions?: Maybe<Array<Maybe<DescriptionType>>>;
  hasVariations?: Maybe<Scalars['Boolean']>;
  /** The unique ID of the product. */
  id: Scalars['String'];
  /** Product images */
  images?: Maybe<Array<Maybe<ImageType>>>;
  /** The product main image URL. */
  imgSrc?: Maybe<Scalars['String']>;
  /** Product added at least in one wishlist */
  inWishlist: Scalars['Boolean'];
  keyProperties?: Maybe<Array<Maybe<Property>>>;
  masterVariation?: Maybe<VariationType>;
  /** Max. quantity */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** Min. quantity */
  minQuantity?: Maybe<Scalars['Int']>;
  /** Minimim product variation price */
  minVariationPrice?: Maybe<PriceType>;
  /** The name of the product. */
  name: Scalars['String'];
  /** The outer identifier */
  outerId?: Maybe<Scalars['String']>;
  /** All parent categories ids relative to the requested catalog and concatenated with \ . E.g. (1/21/344) */
  outline?: Maybe<Scalars['String']>;
  /** Outlines */
  outlines?: Maybe<Array<Maybe<OutlineType>>>;
  /** Product price */
  price?: Maybe<PriceType>;
  /** Product prices */
  prices?: Maybe<Array<Maybe<PriceType>>>;
  /** The type of product */
  productType?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** Request related slug for product */
  slug?: Maybe<Scalars['String']>;
  variations?: Maybe<Array<Maybe<VariationType>>>;
  /** Product vendor */
  vendor?: Maybe<CommonVendor>;
  videos?: Maybe<VideoConnection>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductAssociationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductDescriptionArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductDescriptionsArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductKeyPropertiesArgs = {
  take?: InputMaybe<Scalars['Int']>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductPropertiesArgs = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Products are the sellable goods in an e-commerce project. */
export type ProductVideosArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

/** product association. */
export type ProductAssociation = {
  associatedObjectId?: Maybe<Scalars['String']>;
  associatedObjectType?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `ProductAssociation`. */
export type ProductAssociationConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProductAssociationEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<ProductAssociation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `ProductAssociation`. */
export type ProductAssociationEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductAssociation>;
};

/** A connection from an object to a list of objects of type `Product`. */
export type ProductConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  /** Filter facets */
  filter_facets?: Maybe<Array<Maybe<FilterFacet>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Product>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Range facets */
  range_facets?: Maybe<Array<Maybe<RangeFacet>>>;
  /** Term facets */
  term_facets?: Maybe<Array<Maybe<TermFacet>>>;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Product`. */
export type ProductEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Product>;
};

export type ProductSuggestionsQueryResponseType = {
  suggestions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Represents promotion object */
export type Promotion = {
  /** Promotion description */
  description?: Maybe<Scalars['String']>;
  /** The unique ID of the promotion. */
  id: Scalars['String'];
  /** The name of the promotion */
  name: Scalars['String'];
  /** Promotion type */
  type?: Maybe<Scalars['String']>;
};

/** Products attributes. */
export type Property = {
  /** The display order of the property. */
  displayOrder?: Maybe<Scalars['Int']>;
  /** Is property hidden. */
  hidden: Scalars['Boolean'];
  /** The unique ID of the product. */
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** Is property has multiple values. */
  multivalue: Scalars['Boolean'];
  /** The name of the property. */
  name: Scalars['String'];
  propertyDictItems?: Maybe<PropertyDictionaryItemConnection>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['PropertyValue']>;
  valueId?: Maybe<Scalars['String']>;
  /** ValueType of the property. */
  valueType?: Maybe<Scalars['String']>;
};


/** Products attributes. */
export type PropertyPropertyDictItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

/** A connection from an object to a list of objects of type `Property`. */
export type PropertyConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PropertyEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<Property>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** Represents property dictionary item */
export type PropertyDictionaryItem = {
  /** The unique ID of the property dictionary item. */
  id: Scalars['String'];
  /** Value order. */
  sortOrder: Scalars['Int'];
  /** Value alias. */
  value?: Maybe<Scalars['String']>;
};

/** A connection from an object to a list of objects of type `PropertyDictionaryItem`. */
export type PropertyDictionaryItemConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<PropertyDictionaryItemEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<PropertyDictionaryItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `PropertyDictionaryItem`. */
export type PropertyDictionaryItemEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PropertyDictionaryItem>;
};

/** An edge in a connection from an object to another object of type `Property`. */
export type PropertyEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Property>;
};

/** The type of catalog property. */
export enum PropertyType {
  Catalog = 'CATALOG',
  Category = 'CATEGORY',
  Product = 'PRODUCT',
  Variation = 'VARIATION'
}

export type Query = {
  cart?: Maybe<CartType>;
  carts?: Maybe<CartConnection>;
  categories?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  checkEmailUniqueness?: Maybe<Scalars['Boolean']>;
  checkUsernameUniqueness?: Maybe<Scalars['Boolean']>;
  childCategories?: Maybe<ChildCategoriesQueryResponseType>;
  contact?: Maybe<ContactType>;
  contacts?: Maybe<ContactConnection>;
  countries?: Maybe<Array<Maybe<CountryType>>>;
  customerReviews?: Maybe<CustomerReviewConnection>;
  dynamicProperties?: Maybe<DynamicPropertyConnection>;
  dynamicProperty?: Maybe<DynamicPropertyType>;
  evaluateDynamicContent?: Maybe<EvaluateDynamicContentResultType>;
  fulfillmentCenter?: Maybe<FulfillmentCenterType>;
  fulfillmentCenters?: Maybe<FulfillmentCenterConnection>;
  me?: Maybe<UserType>;
  menu?: Maybe<MenuLinkListType>;
  menus?: Maybe<Array<Maybe<MenuLinkListType>>>;
  order?: Maybe<CustomerOrderType>;
  orders?: Maybe<CustomerOrderConnection>;
  organization?: Maybe<Organization>;
  organizationOrders?: Maybe<CustomerOrderConnection>;
  organizations?: Maybe<OrganizationConnection>;
  pages?: Maybe<PageConnection>;
  payments?: Maybe<PaymentInConnection>;
  product?: Maybe<Product>;
  productSuggestions?: Maybe<ProductSuggestionsQueryResponseType>;
  products?: Maybe<ProductConnection>;
  properties?: Maybe<PropertyConnection>;
  property?: Maybe<Property>;
  quote?: Maybe<QuoteType>;
  quotes?: Maybe<QuoteConnection>;
  regions?: Maybe<Array<Maybe<CountryRegionType>>>;
  requestPasswordReset?: Maybe<Scalars['Boolean']>;
  role?: Maybe<RoleType>;
  user?: Maybe<UserType>;
  validatePassword?: Maybe<CustomIdentityResultType>;
  vendor?: Maybe<Vendor>;
  wishlist?: Maybe<WishlistType>;
  wishlists?: Maybe<WishlistConnection>;
};


export type QueryCartArgs = {
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode: Scalars['String'];
  storeId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryCartsArgs = {
  after?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  facet?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  fuzzy?: InputMaybe<Scalars['Boolean']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  storeId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryCheckEmailUniquenessArgs = {
  email: Scalars['String'];
};


export type QueryCheckUsernameUniquenessArgs = {
  username: Scalars['String'];
};


export type QueryChildCategoriesArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  maxLevel?: InputMaybe<Scalars['Int']>;
  onlyActive?: InputMaybe<Scalars['Boolean']>;
  productFilter?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryContactArgs = {
  id: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  searchPhrase?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCustomerReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  entityId: Scalars['String'];
  entityType: Scalars['String'];
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keyword?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
};


export type QueryDynamicPropertiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  objectType?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryDynamicPropertyArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  idOrName: Scalars['String'];
  objectType?: InputMaybe<Scalars['String']>;
};


export type QueryEvaluateDynamicContentArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  placeName?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toDate?: InputMaybe<Scalars['DateTime']>;
  userGroups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFulfillmentCenterArgs = {
  id: Scalars['String'];
};


export type QueryFulfillmentCentersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  fulfillmentCenterIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
};


export type QueryMenuArgs = {
  cultureName: Scalars['String'];
  name: Scalars['String'];
  storeId: Scalars['String'];
};


export type QueryMenusArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
};


export type QueryOrderArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryOrganizationArgs = {
  id: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryOrganizationOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  searchPhrase?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keyword: Scalars['String'];
  storeId: Scalars['String'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryProductArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  storeId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryProductSuggestionsArgs = {
  query?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['String'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  facet?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  fuzzy?: InputMaybe<Scalars['Boolean']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryPropertiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  storeId: Scalars['String'];
  types?: InputMaybe<Array<InputMaybe<PropertyType>>>;
};


export type QueryPropertyArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};


export type QueryQuoteArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryQuotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  keyword?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryRegionsArgs = {
  countryId: Scalars['String'];
};


export type QueryRequestPasswordResetArgs = {
  loginOrEmail: Scalars['String'];
  urlSuffix?: InputMaybe<Scalars['String']>;
};


export type QueryRoleArgs = {
  roleName: Scalars['String'];
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  loginProvider?: InputMaybe<Scalars['String']>;
  providerKey?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};


export type QueryValidatePasswordArgs = {
  password: Scalars['String'];
};


export type QueryVendorArgs = {
  id: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryWishlistArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
  listId: Scalars['String'];
};


export type QueryWishlistsArgs = {
  after?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type QuoteAddressType = {
  addressType?: Maybe<Scalars['Int']>;
  city: Scalars['String'];
  countryCode?: Maybe<Scalars['String']>;
  countryName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  /** ID */
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Company name */
  organization?: Maybe<Scalars['String']>;
  outerId?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['String']>;
  regionName?: Maybe<Scalars['String']>;
};

export type QuoteAttachmentType = {
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A connection from an object to a list of objects of type `Quote`. */
export type QuoteConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<QuoteEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<QuoteType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Quote`. */
export type QuoteEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<QuoteType>;
};

export type QuoteItemType = {
  catalogId: Scalars['String'];
  categoryId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  listPrice?: Maybe<MoneyType>;
  name: Scalars['String'];
  product?: Maybe<Product>;
  productId: Scalars['String'];
  proposalPrices?: Maybe<Array<Maybe<QuoteTierPriceType>>>;
  salePrice?: Maybe<MoneyType>;
  selectedTierPrice?: Maybe<QuoteTierPriceType>;
  sku: Scalars['String'];
  taxType?: Maybe<Scalars['String']>;
};

export type QuoteShipmentMethodType = {
  currency?: Maybe<CurrencyType>;
  logoUrl?: Maybe<Scalars['String']>;
  optionName?: Maybe<Scalars['String']>;
  price?: Maybe<MoneyType>;
  shipmentMethodCode?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
};

export type QuoteTaxDetailType = {
  amount?: Maybe<MoneyType>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<MoneyType>;
};

export type QuoteTierPriceType = {
  price?: Maybe<MoneyType>;
  quantity: Scalars['Long'];
};

export type QuoteTotalsType = {
  adjustmentQuoteExlTax?: Maybe<MoneyType>;
  discountTotal?: Maybe<MoneyType>;
  grandTotalExlTax?: Maybe<MoneyType>;
  grandTotalInclTax?: Maybe<MoneyType>;
  originalSubTotalExlTax?: Maybe<MoneyType>;
  shippingTotal?: Maybe<MoneyType>;
  subTotalExlTax?: Maybe<MoneyType>;
  taxTotal?: Maybe<MoneyType>;
};

export type QuoteType = {
  addresses?: Maybe<Array<Maybe<QuoteAddressType>>>;
  attachments?: Maybe<Array<Maybe<QuoteAttachmentType>>>;
  cancelReason?: Maybe<Scalars['String']>;
  cancelledDate?: Maybe<Scalars['DateTime']>;
  channelId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  coupon?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate: Scalars['DateTime'];
  currency?: Maybe<CurrencyType>;
  customerId?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  /** Quote dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  employeeId?: Maybe<Scalars['String']>;
  employeeName?: Maybe<Scalars['String']>;
  enableNotification: Scalars['Boolean'];
  expirationDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  innerComment?: Maybe<Scalars['String']>;
  isAnonymous: Scalars['Boolean'];
  isCancelled: Scalars['Boolean'];
  isLocked: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<QuoteItemType>>>;
  languageCode?: Maybe<Scalars['String']>;
  manualRelDiscountAmount?: Maybe<MoneyType>;
  manualShippingTotal?: Maybe<MoneyType>;
  manualSubTotal?: Maybe<MoneyType>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  number: Scalars['String'];
  objectType?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  reminderDate?: Maybe<Scalars['DateTime']>;
  shipmentMethod?: Maybe<QuoteShipmentMethodType>;
  status?: Maybe<Scalars['String']>;
  storeId: Scalars['String'];
  tag?: Maybe<Scalars['String']>;
  taxDetails?: Maybe<Array<Maybe<QuoteTaxDetailType>>>;
  totals?: Maybe<QuoteTotalsType>;
};


export type QuoteTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type RangeFacet = Facet & {
  /** The three types of facets. Terms, Range, Filter */
  facetType?: Maybe<FacetTypes>;
  /** Localized name of the facet. */
  label: Scalars['String'];
  /** The key/name  of the facet. */
  name: Scalars['String'];
  /** Ranges */
  ranges?: Maybe<Array<Maybe<FacetRangeType>>>;
};

export type Rating = {
  /** Total count of customer reviews */
  reviewCount: Scalars['Int'];
  /** Average rating */
  value: Scalars['Decimal'];
};

export type RefreshCartType = {
  cartId?: InputMaybe<Scalars['String']>;
  cartName?: InputMaybe<Scalars['String']>;
  cartType?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  storeId: Scalars['String'];
  userId: Scalars['String'];
};

export type RegisterAccountType = {
  createdBy?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type RegisterContactType = {
  about?: Maybe<Scalars['String']>;
  address?: Maybe<MemberAddressType>;
  birthdate?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<Scalars['String']>;
  /** Contact's dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};


export type RegisterContactTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type RegisterOrganizationType = {
  address?: Maybe<MemberAddressType>;
  createdBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Contact's dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};


export type RegisterOrganizationTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type RegistrationErrorType = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parameter?: Maybe<Scalars['String']>;
};

export type RemoveQuoteItemCommandType = {
  lineItemId: Scalars['String'];
  quoteId: Scalars['String'];
};

export type RequestRegistrationType = {
  /** Contact's account */
  account?: Maybe<RegisterAccountType>;
  /** Created contact */
  contact?: Maybe<RegisterContactType>;
  /** Created company */
  organization?: Maybe<RegisterOrganizationType>;
  /** Account creation result */
  result?: Maybe<AccountCreationResultType>;
};

export type RoleType = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  /** Permissions in Role */
  permissions: Array<Maybe<Scalars['String']>>;
};

export type SeoInfo = {
  id?: Maybe<Scalars['String']>;
  imageAltDescription?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  languageCode?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  objectId?: Maybe<Scalars['String']>;
  objectType?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  semanticUrl?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['String']>;
};

export type ShipmentType = {
  /** Text comment */
  comment?: Maybe<Scalars['String']>;
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Delivery address */
  deliveryAddress?: Maybe<CartAddressType>;
  /** Discount amount */
  discountAmount?: Maybe<MoneyType>;
  /** Discount amount with tax */
  discountAmountWithTax?: Maybe<MoneyType>;
  /** Discounts */
  discounts?: Maybe<Array<Maybe<DiscountType>>>;
  /** Cart shipment dynamic property values */
  dynamicProperties?: Maybe<Array<Maybe<DynamicPropertyValueType>>>;
  /** Fulfillment center id */
  fulfillmentCenterId?: Maybe<Scalars['String']>;
  /** Value of height */
  height?: Maybe<Scalars['Decimal']>;
  /** Shipment Id */
  id?: Maybe<Scalars['String']>;
  /** Items */
  items?: Maybe<Array<Maybe<CartShipmentItemType>>>;
  /** Value of length */
  length?: Maybe<Scalars['Decimal']>;
  /** Value of measurement units */
  measureUnit?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<MoneyType>;
  /** Price with tax */
  priceWithTax?: Maybe<MoneyType>;
  /** Shipment method code */
  shipmentMethodCode?: Maybe<Scalars['String']>;
  /** Shipment method option */
  shipmentMethodOption?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Tax details */
  taxDetails?: Maybe<Array<Maybe<TaxDetailType>>>;
  /** Tax percent rate */
  taxPercentRate?: Maybe<Scalars['Decimal']>;
  /** Tax total */
  taxTotal?: Maybe<MoneyType>;
  /** Tax type */
  taxType?: Maybe<Scalars['String']>;
  /** Total */
  total?: Maybe<MoneyType>;
  /** Total with tax */
  totalWithTax?: Maybe<MoneyType>;
  vendor?: Maybe<CommonVendor>;
  /** Value of volumetric weight */
  volumetricWeight?: Maybe<Scalars['Decimal']>;
  /** Value of weight */
  weight?: Maybe<Scalars['Decimal']>;
  /** Value of weight unit */
  weightUnit?: Maybe<Scalars['String']>;
  /** Value of width */
  width?: Maybe<Scalars['Decimal']>;
};


export type ShipmentTypeDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};

export type ShippingMethodType = {
  /** Value of shipping gateway code */
  code?: Maybe<Scalars['String']>;
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Shipping method description */
  description?: Maybe<Scalars['String']>;
  /** Discount amount */
  discountAmount?: Maybe<MoneyType>;
  /** Discount amount with tax */
  discountAmountWithTax?: Maybe<MoneyType>;
  id?: Maybe<Scalars['String']>;
  /** Value of shipping method logo absolute URL */
  logoUrl?: Maybe<Scalars['String']>;
  /** Shipping method name */
  name?: Maybe<Scalars['String']>;
  /** Value of shipping method option description */
  optionDescription?: Maybe<Scalars['String']>;
  /** Value of shipping method option name */
  optionName?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<MoneyType>;
  /** Price with tax */
  priceWithTax?: Maybe<MoneyType>;
  /** Value of shipping method priority */
  priority?: Maybe<Scalars['Int']>;
  /** Total */
  total?: Maybe<MoneyType>;
  /** Total with tax */
  totalWithTax?: Maybe<MoneyType>;
};

export type SubmitQuoteCommandType = {
  comment: Scalars['String'];
  quoteId: Scalars['String'];
};

export type TaxDetailType = {
  /** Amount */
  amount?: Maybe<MoneyType>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<MoneyType>;
  /** Rate */
  rate?: Maybe<MoneyType>;
};

export type TermFacet = Facet & {
  /** Three facet types: Terms, Range, and Filter */
  facetType?: Maybe<FacetTypes>;
  /** Localized name of the facet. */
  label: Scalars['String'];
  /** The key/name  of the facet. */
  name: Scalars['String'];
  /** Terms */
  terms?: Maybe<Array<Maybe<FacetTermType>>>;
};

export type TierPriceType = {
  /** Price */
  price?: Maybe<MoneyType>;
  /** Price with tax */
  priceWithTax?: Maybe<MoneyType>;
  /** Quantity */
  quantity?: Maybe<Scalars['Long']>;
};

export type UpdateQuoteAddressesCommandType = {
  addresses: Array<InputMaybe<InputQuoteAddressType>>;
  quoteId: Scalars['String'];
};

export type UserType = {
  accessFailedCount: Scalars['Int'];
  /** The associated contact info */
  contact?: Maybe<ContactType>;
  createdBy?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed: Scalars['Boolean'];
  /** Make this user change their password when they sign in next time */
  forcePasswordChange?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  isAdministrator: Scalars['Boolean'];
  /** Account locked state */
  lockedState?: Maybe<Scalars['Boolean']>;
  lockoutEnabled: Scalars['Boolean'];
  lockoutEnd?: Maybe<Scalars['DateTime']>;
  memberId?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
  modifiedDate?: Maybe<Scalars['DateTime']>;
  normalizedEmail?: Maybe<Scalars['String']>;
  normalizedUserName?: Maybe<Scalars['String']>;
  operator?: Maybe<UserType>;
  passwordExpired: Scalars['Boolean'];
  /** Account permissions */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberConfirmed: Scalars['Boolean'];
  photoUrl?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<RoleType>>>;
  securityStamp: Scalars['String'];
  storeId?: Maybe<Scalars['String']>;
  twoFactorEnabled: Scalars['Boolean'];
  userName: Scalars['String'];
  userType?: Maybe<Scalars['String']>;
};

export type ValidationErrorType = {
  /** Error code */
  errorCode?: Maybe<Scalars['String']>;
  /** Error msg */
  errorMessage?: Maybe<Scalars['String']>;
  errorParameters?: Maybe<Array<Maybe<ErrorParameterType>>>;
  /** Object id */
  objectId?: Maybe<Scalars['String']>;
  /** Object type */
  objectType?: Maybe<Scalars['String']>;
};

export type VariationType = {
  /** Assets */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Availability data */
  availabilityData?: Maybe<AvailabilityData>;
  /** SKU of variation. */
  code?: Maybe<Scalars['String']>;
  /** Id of variation. */
  id?: Maybe<Scalars['String']>;
  /** Product images */
  images?: Maybe<Array<Maybe<ImageType>>>;
  /** Max. quantity. */
  maxQuantity?: Maybe<Scalars['Int']>;
  /** Min. quantity. */
  minQuantity?: Maybe<Scalars['Int']>;
  /** Name of variation. */
  name?: Maybe<Scalars['String']>;
  /** Outlines */
  outlines?: Maybe<Array<Maybe<OutlineType>>>;
  /** Product price */
  price?: Maybe<PriceType>;
  /** Product prices */
  prices?: Maybe<Array<Maybe<PriceType>>>;
  /** The type of product */
  productType?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  /** Request related slug for product */
  slug?: Maybe<Scalars['String']>;
  /** Product vendor */
  vendor?: Maybe<CommonVendor>;
};

/** Vendor Info */
export type Vendor = {
  /** About vendor */
  about?: Maybe<Scalars['String']>;
  addresses?: Maybe<MemberAddressConnection>;
  /** Default billing address */
  defaultBillingAddress?: Maybe<MemberAddressType>;
  /** Default shipping address */
  defaultShippingAddress?: Maybe<MemberAddressType>;
  /** Dynamic property values */
  dynamicProperties: Array<Maybe<DynamicPropertyValueType>>;
  /** Emails */
  emails: Array<Maybe<Scalars['String']>>;
  groups: Array<Maybe<Scalars['String']>>;
  /** Icon URL */
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** Member type */
  memberType: Scalars['String'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Outer ID */
  outerId?: Maybe<Scalars['String']>;
  /** Phones */
  phones: Array<Maybe<Scalars['String']>>;
  /** Vendor rating */
  rating?: Maybe<Rating>;
  /** Request related SEO info */
  seoInfo?: Maybe<SeoInfo>;
  /** SEO object type */
  seoObjectType: Scalars['String'];
  /** Site URL */
  siteUrl?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
};


/** Vendor Info */
export type VendorAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


/** Vendor Info */
export type VendorDynamicPropertiesArgs = {
  cultureName?: InputMaybe<Scalars['String']>;
};


/** Vendor Info */
export type VendorRatingArgs = {
  storeId?: InputMaybe<Scalars['String']>;
};


/** Vendor Info */
export type VendorSeoInfoArgs = {
  cultureName: Scalars['String'];
  storeId: Scalars['String'];
};

/** A connection from an object to a list of objects of type `Video`. */
export type VideoConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<VideoEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<VideoType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Video`. */
export type VideoEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<VideoType>;
};

export type VideoType = {
  /** Video URL */
  contentUrl?: Maybe<Scalars['String']>;
  /** Culture name */
  cultureName?: Maybe<Scalars['String']>;
  /** Video description */
  description?: Maybe<Scalars['String']>;
  /** Video duration */
  duration?: Maybe<Scalars['String']>;
  /** Embeded video URL */
  embedUrl?: Maybe<Scalars['String']>;
  /** Video name */
  name: Scalars['String'];
  /** ID of the object video is attached to */
  ownerId?: Maybe<Scalars['String']>;
  /** Type of the object video is attached to (Product, Category) */
  ownerType?: Maybe<Scalars['String']>;
  /** Sort order */
  sortOrder: Scalars['Int'];
  /** Video thumbnial URL */
  thumbnailUrl?: Maybe<Scalars['String']>;
  /** Video upload date */
  uploadDate?: Maybe<Scalars['DateTime']>;
};

/** A connection from an object to a list of objects of type `Wishlist`. */
export type WishlistConnection = {
  /** A list of all of the edges returned in the connection. */
  edges?: Maybe<Array<Maybe<WishlistEdge>>>;
  /** A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead. */
  items?: Maybe<Array<Maybe<WishlistType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type `Wishlist`. */
export type WishlistEdge = {
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<WishlistType>;
};

export type WishlistType = {
  /** Currency */
  currency?: Maybe<CurrencyType>;
  /** Shopping cart user ID */
  customerId?: Maybe<Scalars['String']>;
  /** Shopping cart user name */
  customerName?: Maybe<Scalars['String']>;
  /** Shopping cart ID */
  id?: Maybe<Scalars['String']>;
  /** Items */
  items?: Maybe<Array<Maybe<LineItemType>>>;
  /** Item count */
  itemsCount?: Maybe<Scalars['Int']>;
  /** Shopping cart name */
  name: Scalars['String'];
  /** Shopping cart store ID */
  storeId?: Maybe<Scalars['String']>;
};

export type AddWishlistMutationVariables = Exact<{
  command: InputCreateWishlistType;
}>;


export type AddWishlistMutation = { createWishlist?: { id?: string } };

export type AddWishlistBulkItemMutationVariables = Exact<{
  command: InputAddWishlistBulkItemType;
}>;


export type AddWishlistBulkItemMutation = { addWishlistBulkItem?: { wishlists?: Array<{ id?: string }> } };

export type AddWishlistItemMutationVariables = Exact<{
  command: InputAddWishlistItemType;
}>;


export type AddWishlistItemMutation = { addWishlistItem?: { id?: string } };

export type ChangePasswordMutationVariables = Exact<{
  command?: InputMaybe<InputChangePasswordType>;
}>;


export type ChangePasswordMutation = { changePassword?: { succeeded: boolean, errors?: Array<{ code: string, description?: string, parameter?: string }> } };

export type ConfirmEmailMutationVariables = Exact<{
  command: InputConfirmEmailType;
}>;


export type ConfirmEmailMutation = { confirmEmail?: { succeeded: boolean } };

export type CreateContactMutationVariables = Exact<{
  command: InputCreateContactType;
}>;


export type CreateContactMutation = { createContact?: { id: string } };

export type CreateUserMutationVariables = Exact<{
  command: InputCreateUserType;
}>;


export type CreateUserMutation = { createUser?: { succeeded: boolean, errors?: Array<{ code?: string, description?: string }> } };

export type DeleteMemberAddressesMutationVariables = Exact<{
  command: InputDeleteMemberAddressType;
}>;


export type DeleteMemberAddressesMutation = { deleteMemberAddresses?: { id: string } };

export type DeleteWishlistMutationVariables = Exact<{
  command: InputRemoveWishlistType;
}>;


export type DeleteWishlistMutation = { removeWishlist?: boolean };

export type DeleteWishlistItemMutationVariables = Exact<{
  command: InputRemoveWishlistItemType;
}>;


export type DeleteWishlistItemMutation = { removeWishlistItem?: { id?: string } };

export type InviteUserMutationVariables = Exact<{
  command: InputInviteUserType;
}>;


export type InviteUserMutation = { inviteUser?: { succeeded: boolean, errors?: Array<{ code: string, description?: string, parameter?: string }> } };

export type RequestRegistrationMutationVariables = Exact<{
  command: InputRequestRegistrationType;
}>;


export type RequestRegistrationMutation = { requestRegistration?: { account?: { id: string }, organization?: { id: string }, contact?: { id: string }, result?: { succeeded: boolean, errors?: Array<{ code?: string, description?: string, parameter?: string }> } } };

export type RegisterByInvitationMutationVariables = Exact<{
  command: InputRegisterByInvitationType;
}>;


export type RegisterByInvitationMutation = { registerByInvitation?: { succeeded: boolean, errors?: Array<{ code: string, description?: string, parameter?: string }> } };

export type RenameWishlistMutationVariables = Exact<{
  command: InputRenameWishlistType;
}>;


export type RenameWishlistMutation = { renameWishlist?: { id?: string } };

export type ResetPasswordByTokenMutationVariables = Exact<{
  command?: InputMaybe<InputResetPasswordByTokenType>;
}>;


export type ResetPasswordByTokenMutation = { resetPasswordByToken?: { succeeded: boolean, errors?: Array<{ code: string, description?: string, parameter?: string }> } };

export type SendVerifyEmailMutationVariables = Exact<{
  command?: InputMaybe<InputSendVerifyEmailType>;
}>;


export type SendVerifyEmailMutation = { sendVerifyEmail?: boolean };

export type UpdateContactMutationVariables = Exact<{
  command: InputUpdateContactType;
}>;


export type UpdateContactMutation = { updateContact?: { id: string } };

export type UpdateMemberAddressesMutationVariables = Exact<{
  command: InputUpdateMemberAddressType;
}>;


export type UpdateMemberAddressesMutation = { updateMemberAddresses?: { id: string } };

export type UpdatePersonalDataMutationVariables = Exact<{
  command: InputUpdatePersonalDataType;
}>;


export type UpdatePersonalDataMutation = { updatePersonalData?: { succeeded: boolean, errors?: Array<{ code?: string, description?: string }> } };

export type UpdateWishListItemsMutationVariables = Exact<{
  command: InputUpdateWishlistItemsType;
}>;


export type UpdateWishListItemsMutation = { updateWishListItems?: { id?: string } };

export type CheckEmailUniquenessQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckEmailUniquenessQuery = { checkEmailUniqueness?: boolean };

export type CheckUsernameUniquenessQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type CheckUsernameUniquenessQuery = { checkUsernameUniqueness?: boolean };

export type GetDefaultShippingAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultShippingAddressQuery = { me?: { contact?: { defaultShippingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, isDefault: boolean, phone?: string, email?: string, description?: string, addressType?: number } } } };

export type GetMeQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type GetMeQuery = { me?: { id: string, memberId?: string, userName: string, email?: string, emailConfirmed: boolean, photoUrl?: string, phoneNumber?: string, permissions?: Array<string>, isAdministrator: boolean, passwordExpired: boolean, forcePasswordChange?: boolean, contact?: { firstName: string, lastName: string, fullName: string, organizationId?: string, organizations?: { items?: Array<{ id: string, name?: string }> } }, operator?: { userName: string, contact?: { fullName: string } } } };

export type GetMyAddressesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type GetMyAddressesQuery = { me?: { contact?: { addresses?: { items?: Array<{ id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, isDefault: boolean, phone?: string, email?: string, description?: string, addressType?: number }> } } } };

export type GetWishlistQueryVariables = Exact<{
  listId: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
}>;


export type GetWishlistQuery = { wishlist?: { name: string, id?: string, items?: Array<{ id: string, name?: string, imageUrl?: string, sku?: string, productId?: string, quantity?: number, productType?: string, salePrice?: { amount: any, formattedAmount: string }, listPrice?: { amount: any, formattedAmount: string }, product?: { name: string, id: string, code: string, slug?: string, outline?: string, minQuantity?: number, maxQuantity?: number, imgSrc?: string, images?: Array<{ url?: string }>, vendor?: { id: string, name: string }, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, price?: { actual?: { amount: any, formattedAmount: string }, discountAmount?: { amount: any, formattedAmount: string }, sale?: { amount: any, formattedAmount: string }, list?: { amount: any, formattedAmount: string } } } }> } };

export type GetWishlistsQueryVariables = Exact<{
  storeId: Scalars['String'];
  userId: Scalars['String'];
  currencyCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type GetWishlistsQuery = { wishlists?: { items?: Array<{ id?: string, name: string, items?: Array<{ id: string, productId?: string }> }> } };

export type RequestPasswordResetQueryVariables = Exact<{
  loginOrEmail: Scalars['String'];
  urlSuffix: Scalars['String'];
}>;


export type RequestPasswordResetQuery = { requestPasswordReset?: boolean };

export type AddBulkItemsCartMutationVariables = Exact<{
  command: InputAddBulkItemsType;
}>;


export type AddBulkItemsCartMutation = { addBulkItemsCart?: { cart?: { id?: string, itemsQuantity?: number, items?: Array<{ id: string, sku?: string, quantity?: number, productId?: string, extendedPrice?: { amount: any } }> }, errors?: Array<{ objectId?: string, errorCode?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type AddCouponMutationVariables = Exact<{
  command: InputAddCouponType;
}>;


export type AddCouponMutation = { addCoupon?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type AddGiftItemsMutationVariables = Exact<{
  command: InputAddGiftItemsType;
}>;


export type AddGiftItemsMutation = { addGiftItems?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type AddItemMutationVariables = Exact<{
  command: InputAddItemType;
}>;


export type AddItemMutation = { addItem?: { id?: string, itemsQuantity?: number, items?: Array<{ id: string, sku?: string, quantity?: number, productId?: string, extendedPrice?: { amount: any } }> } };

export type AddItemsCartMutationVariables = Exact<{
  command: InputAddItemsType;
}>;


export type AddItemsCartMutation = { addItemsCart?: { id?: string, itemsQuantity?: number, items?: Array<{ id: string, sku?: string, quantity?: number, productId?: string, extendedPrice?: { amount: any } }> } };

export type AddOrUpdateCartPaymentMutationVariables = Exact<{
  command: InputAddOrUpdateCartPaymentType;
}>;


export type AddOrUpdateCartPaymentMutation = { addOrUpdateCartPayment?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type AddOrUpdateCartShipmentMutationVariables = Exact<{
  command: InputAddOrUpdateCartShipmentType;
}>;


export type AddOrUpdateCartShipmentMutation = { addOrUpdateCartShipment?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type ChangeCartCommentMutationVariables = Exact<{
  command: InputChangeCommentType;
}>;


export type ChangeCartCommentMutation = { changeComment?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type ChangeFullCartItemQuantityMutationVariables = Exact<{
  command: InputChangeCartItemQuantityType;
}>;


export type ChangeFullCartItemQuantityMutation = { changeCartItemQuantity?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type ChangeShortCartItemQuantityMutationVariables = Exact<{
  command: InputChangeCartItemQuantityType;
}>;


export type ChangeShortCartItemQuantityMutation = { changeCartItemQuantity?: { id?: string, itemsQuantity?: number, items?: Array<{ id: string, sku?: string, quantity?: number, productId?: string, extendedPrice?: { amount: any } }> } };

export type ChangePurchaseOrderNumberMutationVariables = Exact<{
  command?: InputMaybe<InputChangePurchaseOrderNumber>;
}>;


export type ChangePurchaseOrderNumberMutation = { changePurchaseOrderNumber?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type MergeCartMutationVariables = Exact<{
  command: InputMergeCartType;
}>;


export type MergeCartMutation = { mergeCart?: { id?: string } };

export type RejectGiftItemsMutationVariables = Exact<{
  command: InputRejectGiftItemsType;
}>;


export type RejectGiftItemsMutation = { rejectGiftItems?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type RemoveCartMutationVariables = Exact<{
  command: InputRemoveCartType;
}>;


export type RemoveCartMutation = { removeCart?: boolean };

export type RemoveCartItemMutationVariables = Exact<{
  command: InputRemoveItemType;
}>;


export type RemoveCartItemMutation = { removeCartItem?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type RemoveCartItemsMutationVariables = Exact<{
  command: InputRemoveItemsType;
}>;


export type RemoveCartItemsMutation = { removeCartItems?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type RemoveCouponMutationVariables = Exact<{
  command: InputRemoveCouponType;
}>;


export type RemoveCouponMutation = { removeCoupon?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type RemoveShipmentMutationVariables = Exact<{
  command: InputRemoveShipmentType;
}>;


export type RemoveShipmentMutation = { removeShipment?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type ValidateCouponMutationVariables = Exact<{
  command: InputValidateCouponType;
}>;


export type ValidateCouponMutation = { validateCoupon?: boolean };

export type GetFullCartQueryVariables = Exact<{
  storeId: Scalars['String'];
  userId: Scalars['String'];
  currencyCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
}>;


export type GetFullCartQuery = { cart?: { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> } };

export type GetShortCartQueryVariables = Exact<{
  storeId: Scalars['String'];
  userId: Scalars['String'];
  currencyCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
}>;


export type GetShortCartQuery = { cart?: { id?: string, itemsQuantity?: number, items?: Array<{ id: string, sku?: string, quantity?: number, productId?: string, extendedPrice?: { amount: any } }> } };

export type GetProductQueryVariables = Exact<{
  storeId: Scalars['String'];
  currencyCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
}>;


export type GetProductQuery = { product?: { name: string, id: string, code: string, slug?: string, outline?: string, hasVariations?: boolean, minQuantity?: number, maxQuantity?: number, imgSrc?: string, inWishlist: boolean, productType?: string, images?: Array<{ url?: string }>, assets?: Array<{ name?: string, url?: string }>, breadcrumbs?: Array<{ itemId: string, typeName?: string, title: string, seoPath?: string }>, description?: { content?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, variations?: Array<{ id?: string, name?: string, minQuantity?: number, maxQuantity?: number, code?: string, productType?: string, images?: Array<{ url?: string }>, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any }, price?: { actual?: { amount: any, formattedAmount: string }, discountAmount?: { amount: any, formattedAmount: string }, sale?: { amount: any, formattedAmount: string }, list?: { amount: any, formattedAmount: string } } }>, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any }, price?: { discountPercent?: any, actual?: { amount: any, formattedAmount: string }, discountAmount?: { amount: any, formattedAmount: string }, sale?: { amount: any, formattedAmount: string }, list?: { amount: any, formattedAmount: string } }, seoInfo?: { pageTitle?: string, metaKeywords?: string, metaDescription?: string } } };

export type GetSearchResultsQueryVariables = Exact<{
  storeId: Scalars['String'];
  userId: Scalars['String'];
  currencyCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  query: Scalars['String'];
  filter?: InputMaybe<Scalars['String']>;
  withProducts: Scalars['Boolean'];
  withCategories: Scalars['Boolean'];
  withPages: Scalars['Boolean'];
  withSuggestions: Scalars['Boolean'];
  productsAfter?: InputMaybe<Scalars['String']>;
  productsFirst?: InputMaybe<Scalars['Int']>;
  productsSort?: InputMaybe<Scalars['String']>;
  productsFuzzy?: InputMaybe<Scalars['Boolean']>;
  productsFuzzyLevel?: InputMaybe<Scalars['Int']>;
  categoriesAfter?: InputMaybe<Scalars['String']>;
  categoriesFirst?: InputMaybe<Scalars['Int']>;
  categoriesSort?: InputMaybe<Scalars['String']>;
  categoriesFuzzy?: InputMaybe<Scalars['Boolean']>;
  categoriesFuzzyLevel?: InputMaybe<Scalars['Int']>;
  pagesFirst?: InputMaybe<Scalars['Int']>;
  pagesAfter?: InputMaybe<Scalars['String']>;
  suggestionsSize?: InputMaybe<Scalars['Int']>;
}>;


export type GetSearchResultsQuery = { productSuggestions?: { suggestions?: Array<string> }, pages?: { totalCount?: number, items?: Array<{ name?: string, relativeUrl?: string }> }, categories?: { totalCount?: number, items?: Array<{ id: string, name: string, slug?: string, seoInfo?: { semanticUrl?: string } }> }, products?: { totalCount?: number, items?: Array<{ id: string, name: string, code: string, slug?: string, imgSrc?: string, vendor?: { id: string, name: string }, availabilityData?: { availableQuantity: any }, price?: { actual?: { amount: any, formattedAmount: string }, list?: { amount: any, formattedAmount: string }, sale?: { amount: any, formattedAmount: string }, discountAmount?: { amount: any, formattedAmount: string } } }> } };

export type SearchProductsQueryVariables = Exact<{
  storeId: Scalars['String'];
  userId: Scalars['String'];
  currencyCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  fuzzy?: InputMaybe<Scalars['Boolean']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  withFacets: Scalars['Boolean'];
  withImages: Scalars['Boolean'];
}>;


export type SearchProductsQuery = { products?: { totalCount?: number, items?: Array<{ name: string, id: string, code: string, minQuantity?: number, maxQuantity?: number, inWishlist: boolean, productType?: string, hasVariations?: boolean, slug?: string, outline?: string, imgSrc?: string, vendor?: { id: string, name: string }, variations?: Array<{ id?: string, price?: { list?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { symbol?: string } }, actual?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { symbol?: string } } } }>, images?: Array<{ url?: string }>, description?: { content?: string, id?: string }, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any }, price?: { discountPercent?: any, actual?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { symbol?: string } }, discountAmount?: { amount: any, formattedAmount: string }, sale?: { amount: any, formattedAmount: string }, list?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { symbol?: string } } }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }> }>, term_facets?: Array<{ name: string, label: string, terms?: Array<{ label: string, term?: string, count?: any, isSelected?: boolean }> }>, range_facets?: Array<{ name: string, label: string, ranges?: Array<{ label?: string, count?: any, from?: any, to?: any, includeFrom: boolean, includeTo: boolean, isSelected?: boolean }> }> } };

export type SearchRelatedProductsQueryVariables = Exact<{
  storeId: Scalars['String'];
  currencyCode: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
}>;


export type SearchRelatedProductsQuery = { product?: { associations?: { items?: Array<{ product?: { name: string, id: string, code: string, slug?: string, imgSrc?: string, vendor?: { id: string, name: string }, availabilityData?: { availableQuantity: any }, price?: { actual?: { amount: any, formattedAmount: string }, list?: { amount: any, formattedAmount: string }, sale?: { amount: any, formattedAmount: string }, discountAmount?: { amount: any, formattedAmount: string } } } }> } } };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { countries?: Array<{ id: string, name: string, regions?: Array<{ id: string, name: string }> }> };

export type GetMenuQueryVariables = Exact<{
  storeId: Scalars['String'];
  cultureName: Scalars['String'];
  name: Scalars['String'];
}>;


export type GetMenuQuery = { menu?: { items?: Array<{ title?: string, url?: string, childItems?: Array<{ title?: string, url?: string }> }> } };

export type GetMenusQueryVariables = Exact<{
  storeId: Scalars['String'];
  cultureName?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
}>;


export type GetMenusQuery = { menus?: Array<{ name?: string, items?: Array<{ title?: string, url?: string, priority?: number }> }> };

export type AvailabilityDataFieldsFragment = { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any };

export type CartAddressFieldsFragment = { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number };

export type CurrencyFieldsFragment = { code: string, symbol?: string };

export type FullCartFieldsFragment = { id?: string, itemsQuantity?: number, purchaseOrderNumber?: string, comment?: string, availableGifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string }>, availableShippingMethods?: Array<{ id?: string, code?: string, logoUrl?: string, optionName?: string, optionDescription?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, availablePaymentMethods?: Array<{ code?: string, name?: string, description?: string, logoUrl?: string, paymentMethodGroupType?: string }>, items?: Array<{ id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> }>, gifts?: Array<{ id: string, imageUrl?: string, name: string, lineItemId?: string, quantity: number }>, coupons?: Array<{ code?: string, isAppliedSuccessfully?: boolean }>, discounts?: Array<{ description?: string, amount?: any, coupon?: string }>, shipments?: Array<{ id?: string, shipmentMethodCode?: string, shipmentMethodOption?: string, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, payments?: Array<{ id?: string, paymentGatewayCode?: string, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, currency?: { code: string, symbol?: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, warnings?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }>, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> }> };

export type FullOrderFieldsFragment = { comment?: string, purchaseOrderNumber?: string, id: string, number: string, createdDate: any, status?: string, currency?: { code: string, symbol?: string }, shipments?: Array<{ shipmentMethodCode?: string, shipmentMethodOption?: string, shippingMethod?: { logoUrl?: string, typeName: string }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, inPayments: Array<{ id: string, number: string, isApproved: boolean, gatewayCode?: string, paymentMethod?: { logoUrl?: string, code: string, typeName: string, paymentMethodType?: number, paymentMethodGroupType?: number }, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, availablePaymentMethods?: Array<{ code: string, logoUrl?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, items: Array<{ id: string, imageUrl?: string, isGift?: boolean, name: string, productId: string, productType?: string, quantity: number, sku: string, outerId?: string, product?: { id: string, brandName?: string, slug?: string, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }> }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } } }>, discounts?: Array<{ coupon?: string, description?: string, promotionId?: string, amount?: { amount: any, formattedAmount: string, currency?: { code: string } } }>, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } };

export type LineItemFieldsFragment = { id: string, name?: string, sku?: string, quantity?: number, inStockQuantity?: number, imageUrl?: string, productId?: string, productType?: string, product?: { id: string, slug?: string, minQuantity?: number, maxQuantity?: number, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { isActive?: boolean, isAvailable?: boolean, isBuyable?: boolean, isInStock?: boolean, availableQuantity: any } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, salePrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, validationErrors?: Array<{ errorCode?: string, errorMessage?: string, errorParameters?: Array<{ key: string, value: string }> }> };

export type MemberAddressFieldsFragment = { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, isDefault: boolean, phone?: string, email?: string, description?: string, addressType?: number };

export type MoneyFieldsFragment = { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } };

export type OrderAddressFieldsFragment = { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number };

export type OrderLineItemFieldsFragment = { id: string, imageUrl?: string, isGift?: boolean, name: string, productId: string, productType?: string, quantity: number, sku: string, outerId?: string, product?: { id: string, brandName?: string, slug?: string, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }> }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } } };

export type PropertyFieldsFragment = { name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string };

export type QuoteAddressFieldsFragment = { firstName: string, lastName: string, line1?: string, line2?: string, city: string, countryCode?: string, countryName: string, regionId?: string, regionName?: string, postalCode?: string, phone?: string, email?: string, addressType?: number, key?: string };

export type QuoteLineItemFieldsFragment = { id: string, sku: string, productId: string, name: string, imageUrl?: string, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, selectedTierPrice?: { quantity: any, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }, product?: { id: string, slug?: string, brandName?: string, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { availableQuantity: any, isInStock?: boolean } } };

export type ShortCartFieldsFragment = { id?: string, itemsQuantity?: number, items?: Array<{ id: string, sku?: string, quantity?: number, productId?: string, extendedPrice?: { amount: any } }> };

export type ShortOrderFieldsFragment = { id: string, number: string, createdDate: any, status?: string, items: Array<{ id: string, imageUrl?: string, isGift?: boolean, name: string, productId: string, productType?: string, quantity: number, sku: string, outerId?: string, product?: { id: string, brandName?: string, slug?: string, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }> }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } } }>, discounts?: Array<{ coupon?: string, description?: string, promotionId?: string, amount?: { amount: any, formattedAmount: string, currency?: { code: string } } }>, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } };

export type ValidationErrorFieldsFragment = { errorCode?: string, errorMessage?: string, objectId?: string, objectType?: string, errorParameters?: Array<{ key: string, value: string }> };

export type GetFulfillmentCenterQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetFulfillmentCenterQuery = { fulfillmentCenter?: { id: string, name?: string, description?: string, shortDescription?: string, address?: { city?: string, countryCode?: string, countryName?: string, line1?: string, line2?: string, postalCode: string, zip?: string, phone?: string } } };

export type GetFulfillmentCentersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  storeId?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  fulfillmentCenterIds?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetFulfillmentCentersQuery = { fulfillmentCenters?: { items?: Array<{ id: string, name?: string, description?: string, shortDescription?: string, address?: { city?: string, countryCode?: string, countryName?: string, line1?: string, line2?: string, postalCode: string, zip?: string, phone?: string } }> } };

export type AddOrUpdateOrderPaymentMutationVariables = Exact<{
  command: InputAddOrUpdateOrderPaymentType;
}>;


export type AddOrUpdateOrderPaymentMutation = { addOrUpdateOrderPayment?: { id: string } };

export type CreateOrderFromCartMutationVariables = Exact<{
  command: InputCreateOrderFromCartType;
}>;


export type CreateOrderFromCartMutation = { createOrderFromCart?: { comment?: string, purchaseOrderNumber?: string, id: string, number: string, createdDate: any, status?: string, currency?: { code: string, symbol?: string }, shipments?: Array<{ shipmentMethodCode?: string, shipmentMethodOption?: string, shippingMethod?: { logoUrl?: string, typeName: string }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, inPayments: Array<{ id: string, number: string, isApproved: boolean, gatewayCode?: string, paymentMethod?: { logoUrl?: string, code: string, typeName: string, paymentMethodType?: number, paymentMethodGroupType?: number }, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, availablePaymentMethods?: Array<{ code: string, logoUrl?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, items: Array<{ id: string, imageUrl?: string, isGift?: boolean, name: string, productId: string, productType?: string, quantity: number, sku: string, outerId?: string, product?: { id: string, brandName?: string, slug?: string, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }> }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } } }>, discounts?: Array<{ coupon?: string, description?: string, promotionId?: string, amount?: { amount: any, formattedAmount: string, currency?: { code: string } } }>, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } } };

export type GetFullOrderQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
}>;


export type GetFullOrderQuery = { order?: { comment?: string, purchaseOrderNumber?: string, id: string, number: string, createdDate: any, status?: string, currency?: { code: string, symbol?: string }, shipments?: Array<{ shipmentMethodCode?: string, shipmentMethodOption?: string, shippingMethod?: { logoUrl?: string, typeName: string }, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, deliveryAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, inPayments: Array<{ id: string, number: string, isApproved: boolean, gatewayCode?: string, paymentMethod?: { logoUrl?: string, code: string, typeName: string, paymentMethodType?: number, paymentMethodGroupType?: number }, billingAddress?: { id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, phone?: string, email?: string, addressType?: number } }>, availablePaymentMethods?: Array<{ code: string, logoUrl?: string, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }>, items: Array<{ id: string, imageUrl?: string, isGift?: boolean, name: string, productId: string, productType?: string, quantity: number, sku: string, outerId?: string, product?: { id: string, brandName?: string, slug?: string, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }> }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } } }>, discounts?: Array<{ coupon?: string, description?: string, promotionId?: string, amount?: { amount: any, formattedAmount: string, currency?: { code: string } } }>, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } } };

export type GetShortOrderQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
}>;


export type GetShortOrderQuery = { order?: { id: string, number: string, createdDate: any, status?: string, items: Array<{ id: string, imageUrl?: string, isGift?: boolean, name: string, productId: string, productType?: string, quantity: number, sku: string, outerId?: string, product?: { id: string, brandName?: string, slug?: string, masterVariation?: { id?: string, slug?: string }, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }> }, extendedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, placedPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, vendor?: { id: string, name: string, rating?: { value: any, reviewCount: number } } }>, discounts?: Array<{ coupon?: string, description?: string, promotionId?: string, amount?: { amount: any, formattedAmount: string, currency?: { code: string } } }>, discountTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, shippingTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, taxTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, subTotal?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } } };

export type GetOrdersQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetOrdersQuery = { orders?: { totalCount?: number, items?: Array<{ id: string, createdDate: any, status?: string, number: string, customerId: string, purchaseOrderNumber?: string, currency?: { code: string }, total?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, inPayments: Array<{ number: string }> }> } };

export type ChangeOrganizationContactRoleMutationVariables = Exact<{
  command: InputChangeOrganizationContactRoleType;
}>;


export type ChangeOrganizationContactRoleMutation = { changeOrganizationContactRole?: { succeeded: boolean, errors?: Array<{ code: string, parameter?: string, description?: string }> } };

export type LockOrganizationContactMutationVariables = Exact<{
  command: InputLockUnlockOrganizationContactType;
}>;


export type LockOrganizationContactMutation = { lockOrganizationContact?: { id: string } };

export type RemoveMemberFromOrganizationMutationVariables = Exact<{
  command: InputRemoveMemberFromOrganizationType;
}>;


export type RemoveMemberFromOrganizationMutation = { removeMemberFromOrganization?: { id: string } };

export type UnlockOrganizationContactMutationVariables = Exact<{
  command: InputLockUnlockOrganizationContactType;
}>;


export type UnlockOrganizationContactMutation = { unlockOrganizationContact?: { id: string } };

export type UpdateOrganizationMutationVariables = Exact<{
  command: InputUpdateOrganizationType;
}>;


export type UpdateOrganizationMutation = { updateOrganization?: { id: string } };

export type GetOrganizationAddressesQueryVariables = Exact<{
  id: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type GetOrganizationAddressesQuery = { organization?: { addresses?: { totalCount?: number, items?: Array<{ id?: string, name?: string, organization?: string, firstName?: string, lastName?: string, line1?: string, line2?: string, city?: string, countryCode?: string, countryName?: string, regionId?: string, regionName?: string, postalCode: string, isDefault: boolean, phone?: string, email?: string, description?: string, addressType?: number }> } } };

export type GetOrganizationContactsQueryVariables = Exact<{
  id: Scalars['String'];
  userId: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  searchPhrase?: InputMaybe<Scalars['String']>;
}>;


export type GetOrganizationContactsQuery = { organization?: { contacts?: { totalCount?: number, items?: Array<{ id: string, name?: string, firstName: string, lastName: string, fullName: string, emails: Array<string>, status?: string, securityAccounts?: Array<{ id: string, email?: string, roles?: Array<{ id: string, name: string }> }> }> } } };

export type AuthorizePaymentMutationVariables = Exact<{
  command: InputAuthorizePaymentType;
}>;


export type AuthorizePaymentMutation = { authorizePayment?: { isSuccess: boolean, errorMessage?: string } };

export type InitializePaymentMutationVariables = Exact<{
  command: InputInitializePaymentType;
}>;


export type InitializePaymentMutation = { initializePayment?: { isSuccess: boolean, errorMessage?: string, actionHtmlForm?: string, actionRedirectUrl?: string, paymentActionType?: string, publicParameters?: Array<{ key: string, value?: string }> } };

export type ChangeQuoteCommentMutationVariables = Exact<{
  command: ChangeQuoteCommentCommandType;
}>;


export type ChangeQuoteCommentMutation = { changeQuoteComment?: { id: string } };

export type ChangeQuoteItemQuantityMutationVariables = Exact<{
  command: ChangeQuoteItemQuantityCommandType;
}>;


export type ChangeQuoteItemQuantityMutation = { changeQuoteItemQuantity?: { id: string } };

export type CreateQuoteFromCartMutationVariables = Exact<{
  command: CreateQuoteFromCartCommandType;
}>;


export type CreateQuoteFromCartMutation = { createQuoteFromCart?: { id: string } };

export type RemoveQuoteItemMutationVariables = Exact<{
  command: RemoveQuoteItemCommandType;
}>;


export type RemoveQuoteItemMutation = { removeQuoteItem?: { id: string } };

export type SubmitQuoteRequestMutationVariables = Exact<{
  command: SubmitQuoteCommandType;
}>;


export type SubmitQuoteRequestMutation = { submitQuoteRequest?: { id: string } };

export type UpdateQuoteAddressesMutationVariables = Exact<{
  command: UpdateQuoteAddressesCommandType;
}>;


export type UpdateQuoteAddressesMutation = { updateQuoteAddresses?: { id: string } };

export type GetQuoteQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
}>;


export type GetQuoteQuery = { quote?: { id: string, number: string, createdDate: any, cancelledDate?: any, cancelReason?: string, comment?: string, isCancelled: boolean, status?: string, items?: Array<{ id: string, sku: string, productId: string, name: string, imageUrl?: string, listPrice?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } }, selectedTierPrice?: { quantity: any, price?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } }, product?: { id: string, slug?: string, brandName?: string, properties?: Array<{ name: string, value?: any, type?: string, hidden: boolean, valueType?: string, label?: string }>, availabilityData?: { availableQuantity: any, isInStock?: boolean } } }>, addresses?: Array<{ firstName: string, lastName: string, line1?: string, line2?: string, city: string, countryCode?: string, countryName: string, regionId?: string, regionName?: string, postalCode?: string, phone?: string, email?: string, addressType?: number, key?: string }>, totals?: { grandTotalInclTax?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } } } };

export type GetQuotesQueryVariables = Exact<{
  storeId?: InputMaybe<Scalars['String']>;
  cultureName?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetQuotesQuery = { quotes?: { totalCount?: number, items?: Array<{ id: string, createdDate: any, customerId?: string, number: string, status?: string, totals?: { grandTotalInclTax?: { amount: any, formattedAmount: string, formattedAmountWithoutCurrency: string, currency?: { code: string, symbol?: string } } } }> } };
