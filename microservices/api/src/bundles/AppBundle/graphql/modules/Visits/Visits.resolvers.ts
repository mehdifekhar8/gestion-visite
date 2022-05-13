import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { VisitInsertInput, VisitUpdateInput } from "../../../services/inputs";
import { VisitsCollection } from "../../../collections/Visits/Visits.collection";

export default {
  Query: [
    [],
    {
      VisitsFindOne: [X.ToNovaOne(VisitsCollection)],
      VisitsFind: [X.ToNova(VisitsCollection)],
      VisitsCount: [X.ToCollectionCount(VisitsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      VisitsInsertOne: [
        X.ToModel(VisitInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(VisitsCollection),
        X.ToNovaByResultID(VisitsCollection),
      ],
      VisitsUpdateOne: [
        X.ToModel(VisitUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(VisitsCollection),
        X.ToDocumentUpdateByID(VisitsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(VisitsCollection),
      ],
      VisitsDeleteOne: [
        X.CheckDocumentExists(VisitsCollection),
        X.ToDocumentDeleteByID(VisitsCollection),
      ],
    },
  ],
  Subscription: {
    VisitsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(VisitsCollection)],
    },
    VisitsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(VisitsCollection)],
    },
  },
} as IResolverMap;
