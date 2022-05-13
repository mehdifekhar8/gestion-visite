import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { RegionInsertInput, RegionUpdateInput } from "../../../services/inputs";
import { RegionsCollection } from "../../../collections/Regions/Regions.collection";

export default {
  Query: [
    [],
    {
      RegionsFindOne: [X.ToNovaOne(RegionsCollection)],
      RegionsFind: [X.ToNova(RegionsCollection)],
      RegionsCount: [X.ToCollectionCount(RegionsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      RegionsInsertOne: [
        X.ToModel(RegionInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(RegionsCollection),
        X.ToNovaByResultID(RegionsCollection),
      ],
      RegionsUpdateOne: [
        X.ToModel(RegionUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(RegionsCollection),
        X.ToDocumentUpdateByID(RegionsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(RegionsCollection),
      ],
      RegionsDeleteOne: [
        X.CheckDocumentExists(RegionsCollection),
        X.ToDocumentDeleteByID(RegionsCollection),
      ],
    },
  ],
  Subscription: {
    RegionsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(RegionsCollection)],
    },
    RegionsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(RegionsCollection)],
    },
  },
} as IResolverMap;
