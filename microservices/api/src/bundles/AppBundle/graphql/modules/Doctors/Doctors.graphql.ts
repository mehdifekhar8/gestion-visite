export default /* GraphQL */ `
  type Query {
    DoctorsFindOne(query: QueryInput): Doctor
    DoctorsFind(query: QueryInput): [Doctor]!
    DoctorsCount(query: QueryInput): Int!
  }

  type Mutation {
    DoctorsInsertOne(document: DoctorInsertInput!): Doctor
    DoctorsUpdateOne(_id: ObjectId!, document: DoctorUpdateInput!): Doctor!
    DoctorsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    DoctorsSubscription(body: EJSON): SubscriptionEvent
    DoctorsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
