export default /* GraphQL */ `
  input UserInsertInput {
    isEnabled: Boolean!
    profile: UserProfileInput!
    regionId: ObjectId
    roles: [UserRole]!
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
