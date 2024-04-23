import gql from 'graphql-tag'

const SEARCH_RELATED_PRODUCTS = gql`
query SearchRelatedProducts(
  $storeId: String!
  $currencyCode: String!
  $cultureName: String
  $id: String!
  $after: String
  $first: Int
  $group: String
  $query: String
) {
  product(storeId: $storeId, id: $id, currencyCode: $currencyCode, cultureName: $cultureName) {
    associations(after: $after, first: $first, group: $group, query: $query) {
      items {
        product {
          name
          id
          code
          slug
          imgSrc
          vendor {
            id
            name
          }
          availabilityData {
            availableQuantity
          }
          price {
            actual {
              amount
              formattedAmount
            }
            list {
              amount
              formattedAmount
            }
            sale {
              amount
              formattedAmount
            }
            discountAmount {
              amount
              formattedAmount
            }
          }
        }
      }
    }
  }
}
`

export default SEARCH_RELATED_PRODUCTS