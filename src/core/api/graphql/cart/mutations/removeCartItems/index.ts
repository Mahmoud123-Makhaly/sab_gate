import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./removeCartItemsMutation";
import type { CartType, Mutations, MutationsRemoveCartItemsArgs } from "../../../../graphql/types";

export async function removeCartItems(lineItemIds: string[]): Promise<CartType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "removeCartItems">>,
    MutationsRemoveCartItemsArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: {
        storeId,
        userId,
        cultureName,
        currencyCode,
        lineItemIds,
      },
    },
  });

  return data!.removeCartItems;
}
