export default /* GraphQL */ `
  input UserRegistrationInput {
    email: String!
    password: String!
    profile: UserProfileInput!
    roles: [UserRole]!
    regionId: ObjectId
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
 