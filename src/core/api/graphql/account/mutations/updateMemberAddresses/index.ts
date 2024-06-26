import graphqlClient  from "../../../client";
import mutationDocument from "./updateMemberAddressesMutation";
import type { InputMemberAddressType, Mutations, MutationsUpdateMemberAddressesArgs } from "../../../../graphql/types";

export default async function updateMemberAddresses(
  memberId: string,
  addresses: InputMemberAddressType[],
): Promise<void> {
  await graphqlClient.mutate<Required<Pick<Mutations, "updateMemberAddresses">>, MutationsUpdateMemberAddressesArgs>({
    mutation: mutationDocument,
    variables: {
      command: {
        memberId,
        addresses,
      },
    },
  });
}
