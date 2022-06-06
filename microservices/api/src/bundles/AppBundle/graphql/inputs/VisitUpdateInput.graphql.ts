export default /* GraphQL */ `
  input VisitUpdateInput {
    coordinates: VisitCoordinatesInput
    doctorId: ObjectId
    information: String
    information2: String
    locationValidation: Float
    rotationId: ObjectId
  }

  input VisitCoordinatesInput {
    lat: Float!
    lng: Float!
  }
`;
