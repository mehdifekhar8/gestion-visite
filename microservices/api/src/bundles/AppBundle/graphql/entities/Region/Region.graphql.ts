export default /* GraphQL */ `
  type Region {
    _id: ObjectId

    """
    Represents the date when this object was created
    """
    createdAt: Date!
    name: String!
    statesList: [State]!
    statesListIds: [ObjectId]!
    superVisor: User
    superVisorId: ObjectId

    """
    Represents the last time when the object was updated
    """
    updatedAt: Date!
    usersList: [User]!
  }
`;
