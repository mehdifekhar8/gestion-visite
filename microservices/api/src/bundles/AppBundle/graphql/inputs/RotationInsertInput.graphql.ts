export default /* GraphQL */ `
  input RotationInsertInput {
    doctorsListIds: [ObjectId]!
    from: Date!
    isDone: Boolean!
    to: Date!
    type: [RotationType]!
    userId: ObjectId!
  }
`;
