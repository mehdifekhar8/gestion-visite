export default /* GraphQL */ `
  type Query {
    VisitsFindOne(query: QueryInput): Visit
    VisitsFind(query: QueryInput): [Visit]!
    VisitsCount(query: QueryInput): Int!
  }

  type Mutation {
    VisitsInsertOne(document: VisitInsertInput!): Visit
    VisitsUpdateOne(_id: ObjectId!, document: VisitUpdateInput!): Visit!
    VisitsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    VisitsSubscription(body: EJSON): SubscriptionEvent
    VisitsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
