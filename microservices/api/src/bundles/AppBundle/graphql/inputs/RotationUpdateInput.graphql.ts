export default /* GraphQL */ `
  input RotationUpdateInput {
    doctorsListIds: [ObjectId]
    from: Date
    isDone: Boolean
    roles: [RotationRole]
    to: Date
    userId: ObjectId
  }
`;
