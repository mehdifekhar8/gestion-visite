export default /* GraphQL */ `
  input DoctorInsertInput {
    address: DoctorAddressInput
    coordinates: DoctorCoordinatesInput!
    isEnabled: Boolean!
    phone: String!
    profile: DoctorProfileInput!
    regionId: ObjectId
  }

  input DoctorAddressInput {
    wilaya: String
    daira: String
    commune: String
  }
  input DoctorCoordinatesInput {
    lat: Float!
    lng: Float!
  }
  input DoctorProfileInput {
    firstName: String!
    lastName: String!
  }
`;
