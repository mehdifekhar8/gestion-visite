export default /* GraphQL */ `
  input DoctorUpdateInput {
    coordinates: DoctorCoordinatesInput
    fullName: String
    isEnabled: Boolean
    phone: String
    profile: DoctorProfileInput
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
