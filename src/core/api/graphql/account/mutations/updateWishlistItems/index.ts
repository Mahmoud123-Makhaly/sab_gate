import graphqlClient  from "../../../client";
import mutationDocument from "./updateWishlistItemsMutation";
import type {
  InputUpdateWishlistItemsType,
  Mutations,
  MutationsUpdateWishListItemsArgs,
} from "../../../../graphql/types";

export default async function updateWishlistItems(payload: InputUpdateWishlistItemsType): Promise<void> {
  await graphqlClient.mutate<Required<Pick<Mutations, "updateWishListItems">>, MutationsUpdateWishListItemsArgs>({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });
}