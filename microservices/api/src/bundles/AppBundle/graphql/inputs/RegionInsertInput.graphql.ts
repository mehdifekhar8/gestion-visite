export default /* GraphQL */ `
  input RegionInsertInput {
    name: String!
    statesListIds: [ObjectId]!
    superVisorId: ObjectId
  }
`;
