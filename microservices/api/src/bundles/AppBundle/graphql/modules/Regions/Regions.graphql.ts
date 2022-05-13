export default /* GraphQL */ `
  type Query {
    RegionsFindOne(query: QueryInput): Region
    RegionsFind(query: QueryInput): [Region]!
    RegionsCount(query: QueryInput): Int!
  }

  type Mutation {
    RegionsInsertOne(document: RegionInsertInput!): Region
    RegionsUpdateOne(_id: ObjectId!, document: RegionUpdateInput!): Region!
    RegionsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    RegionsSubscription(body: EJSON): SubscriptionEvent
    RegionsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
