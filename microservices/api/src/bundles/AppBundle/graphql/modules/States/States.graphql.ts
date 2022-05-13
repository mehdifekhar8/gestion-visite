export default /* GraphQL */ `
  type Query {
    StatesFindOne(query: QueryInput): State
    StatesFind(query: QueryInput): [State]!
    StatesCount(query: QueryInput): Int!
  }

  type Mutation {
    StatesInsertOne(document: StateInsertInput!): State
    StatesUpdateOne(_id: ObjectId!, document: StateUpdateInput!): State!
    StatesDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    StatesSubscription(body: EJSON): SubscriptionEvent
    StatesSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
