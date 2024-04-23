import CART_ADDRESS_FIELDS from "./cartAddressFields"
import LINE_ITEM_FIELDS from "./lineItemFields"
import MONEY_FIELDS from "./moneyFields"
import CURRENCY_FIELDS from "./currencyFields"
import VALIDATION_ERROR_FIELDS from "./validationErrorFields"
import gql from 'graphql-tag'

const FULL_CART_FIELDS = gql`
${CART_ADDRESS_FIELDS}
${LINE_ITEM_FIELDS}
${MONEY_FIELDS}
${CURRENCY_FIELDS}
${VALIDATION_ERROR_FIELDS}
fragment fullCartFields on CartType {
  id
  itemsQuantity
  purchaseOrderNumber
  comment
  availableGifts {
    id
    imageUrl
    name
    lineItemId
  }
  availableShippingMethods {
    id
    code
    logoUrl
    optionName
    optionDescription
    price {
      ...moneyFields
    }
  }
  availablePaymentMethods {
    code
    name
    description
    logoUrl
    paymentMethodGroupType
  }
  items {
    ...lineItemFields
  }
  gifts {
    id
    imageUrl
    name
    lineItemId
    quantity
  }
  coupons {
    code
    isAppliedSuccessfully
  }
  discounts {
    description
    amount
    coupon
  }
  shipments {
    id
    shipmentMethodCode
    shipmentMethodOption
    deliveryAddress {
      ...cartAddressFields
    }
    price {
      ...moneyFields
    }
  }
  payments {
    id
    paymentGatewayCode
    billingAddress {
      ...cartAddressFields
    }
  }
  currency {
    ...currencyFields
  }
  total {
    ...moneyFields
  }
  discountTotal {
    ...moneyFields
  }
  subTotal {
    ...moneyFields
  }
  shippingTotal {
    ...moneyFields
  }
  taxTotal {
    ...moneyFields
  }
  warnings {
    ...validationErrorFields
  }
  validationErrors(ruleSet: "items") {
    ...validationErrorFields
  }
}
`

export default FULL_CART_FIELDS