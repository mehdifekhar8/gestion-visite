export default /* GraphQL */ `
  input DoctorInsertInput {
    coordinates: DoctorCoordinatesInput!
    isEnabled: Boolean!
    phone: String!
    profile: DoctorProfileInput!
    regionId: ObjectId!
  }

  input DoctorCoordinatesInput {
    lat: String!
    lng: String!
  }
  input DoctorProfileInput {
    firstName: String!
    lastName: String!
  }
`;
