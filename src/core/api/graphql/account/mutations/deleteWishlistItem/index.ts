import graphqlClient  from "../../../client";
import mutationDocument from "./deleteWishlistItemMutation";
import type {
  InputRemoveWishlistItemType,
  Mutations,
  MutationsRemoveWishlistItemArgs,
  WishlistType,
} from "../../../../graphql/types";

export default async function deleteWishlistItem(payload: InputRemoveWishlistItemType): Promise<WishlistType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "removeWishlistItem">>,
    MutationsRemoveWishlistItemArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data!.removeWishlistItem;
}
