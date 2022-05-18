export default /* GraphQL */ `
  input DoctorUpdateInput {
    coordinates: DoctorCoordinatesInput
    isEnabled: Boolean
    phone: String
    profile: DoctorProfileInput
    regionId: ObjectId
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
