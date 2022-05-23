export default /* GraphQL */ `
  input RotationInsertInput {
    doctorsListIds: [ObjectId]!
    from: Date!
    isDone: Boolean!
    roles: [RotationRole]!
    to: Date!
    userId: ObjectId!
  }
`;
