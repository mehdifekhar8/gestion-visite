export default /* GraphQL */ `
  input RegionUpdateInput {
    name: String
    statesListIds: [ObjectId]
    superVisorId: ObjectId
    usersListIds: [ObjectId]
  }
`;
