export default /* GraphQL */ `
  input RotationUpdateInput {
    doctorsListIds: [ObjectId]
    from: Date
    isDone: Boolean
    to: Date
    type: [RotationType]
    userId: ObjectId
  }
`;
