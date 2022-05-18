export default /* GraphQL */ `
  input UserUpdateInput {
    isEnabled: Boolean
    profile: UserProfileInput
    regionId: ObjectId
    roles: [UserRole]
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
