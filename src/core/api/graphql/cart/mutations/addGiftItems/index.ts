import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./addGiftItemsMutation";
import type { CartType, Mutations, MutationsAddGiftItemsArgs } from "../../../../graphql/types";

export async function addGiftItems(giftIds: string[]): Promise<CartType> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "addGiftItems">>, MutationsAddGiftItemsArgs>({
    mutation: mutationDocument,
    variables: {
      command: {
        storeId,
        userId,
        cultureName,
        currencyCode,
        ids: giftIds,
      },
    },
  });

  return data!.addGiftItems;
}
