import { gql } from "@apollo/client";

export const UserRegistration = gql`
  mutation Mutation($document: UserRegistrationInput!) {
    UserRegistration(document: $document)
  }
`;
