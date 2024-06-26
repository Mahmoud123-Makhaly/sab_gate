import graphqlClient  from "../../../client";
import mutationDocument from "./authorizePaymentMutation";
import type {
  AuthorizePaymentResultType,
  InputAuthorizePaymentType,
  Mutations,
  MutationsAuthorizePaymentArgs,
} from "../../../../graphql/types";

export async function authorizePayment(payload: InputAuthorizePaymentType): Promise<AuthorizePaymentResultType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "authorizePayment">>,
    MutationsAuthorizePaymentArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data!.authorizePayment;
}
