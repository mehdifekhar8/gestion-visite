export default /* GraphQL */ `
  type Visit {
    _id: ObjectId
    coordinates: VisitCoordinates!

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
    doctor: Doctor!
    doctorId: ObjectId!
    information: String!
    information2: String!
    locationValidation: Float!
    rotation: Rotation
    rotationId: ObjectId

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
  }

  type VisitCoordinates {
    lat: Float!
    lng: Float!
  }
`;
