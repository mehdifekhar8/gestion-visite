export default /* GraphQL */ `
  type Visit {
    _id: ObjectId

    """
    Represents the date when this object was created
    """
    createdAt: Date!
    doctor: Doctor!
    doctorId: ObjectId!
    information: String!
    information2: String!

    """
    Represents the last time when the object was updated
    """
    updatedAt: Date!
  }
`;
