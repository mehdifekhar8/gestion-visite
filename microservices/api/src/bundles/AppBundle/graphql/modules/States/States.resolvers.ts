import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { StateInsertInput, StateUpdateInput } from "../../../services/inputs";
import { StatesCollection } from "../../../collections/States/States.collection";

export default {
  Query: [
    [],
    {
      StatesFindOne: [X.ToNovaOne(StatesCollection)],
      StatesFind: [X.ToNova(StatesCollection)],
      StatesCount: [X.ToCollectionCount(StatesCollection)],
    },
  ],
  Mutation: [
    [],
    {
      StatesInsertOne: [
        X.ToModel(StateInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(StatesCollection),
        X.ToNovaByResultID(StatesCollection),
      ],
      StatesUpdateOne: [
        X.ToModel(StateUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(StatesCollection),
        X.ToDocumentUpdateByID(StatesCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(StatesCollection),
      ],
      StatesDeleteOne: [
        X.CheckDocumentExists(StatesCollection),
        X.ToDocumentDeleteByID(StatesCollection),
      ],
    },
  ],
  Subscription: {
    StatesSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(StatesCollection)],
    },
    StatesSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(StatesCollection)],
    },
  },
} as IResolverMap;
