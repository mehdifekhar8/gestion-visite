export default /* GraphQL */ `
  type Rotation {
    _id: ObjectId

    """
    Represents the date when this object was created
    """
    createdAt: Date!

    """
    Represents the user who has created this object
    """
    createdBy: User

    """
    Represents the user's id who has created this object
    """
    createdById: ObjectId
    doctorsList: [Doctor]!
    doctorsListIds: [ObjectId]!
    from: Date!
    isDone: Boolean!
    roles: [RotationRole]!
    to: Date!

    """
    Represents the last time when the object was updated
    """
    updatedAt: Date!

    """
    Represents the user who has made the latest update on this object
    """
    updatedBy: User

    """
    Represents the user's id who has made the latest update on this object
    """
    updatedById: ObjectId
    user: User!
    userId: ObjectId!
  }

  enum RotationRole {
    EACH_DAY
    GLOBAL
  }
`;
