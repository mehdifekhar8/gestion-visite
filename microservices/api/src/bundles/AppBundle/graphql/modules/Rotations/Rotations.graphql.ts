export default /* GraphQL */ `
  type Query {
    RotationsFindOne(query: QueryInput): Rotation
    RotationsFind(query: QueryInput): [Rotation]!
    RotationsCount(query: QueryInput): Int!
  }

  type Mutation {
    RotationsInsertOne(document: RotationInsertInput!): Rotation
    RotationsUpdateOne(
      _id: ObjectId!
      document: RotationUpdateInput!
    ): Rotation!
    RotationsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    RotationsSubscription(body: EJSON): SubscriptionEvent
    RotationsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
