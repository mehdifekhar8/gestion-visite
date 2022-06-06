export default /* GraphQL */ `
  type Doctor {
    _id: ObjectId
    address: DoctorAddress
    coordinates: DoctorCoordinates!

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
    fullName: String!
    isEnabled: Boolean!
    phone: String!
    profile: DoctorProfile!
    region: Region
    regionId: ObjectId

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

  type DoctorAddress {
    wilaya: String
    daira: String
    commune: String
  }
  type DoctorCoordinates {
    lat: Float!
    lng: Float!
  }
  type DoctorProfile {
    firstName: String!
    lastName: String!
  }
`;
