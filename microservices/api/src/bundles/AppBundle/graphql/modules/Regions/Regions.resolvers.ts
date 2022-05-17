import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { RegionInsertInput, RegionUpdateInput } from "../../../services/inputs";
import { RegionsCollection, UserRole } from "@bundles/AppBundle/collections";
import { RegionInsertService } from "@bundles/AppBundle/services/RegionInsert.service";
import { RegionOwnerCheck } from "@bundles/AppBundle/services/RegionOwnerCheck.service";

export default {
  Query: [
    [],
    {
      RegionsFindOne: [X.ToNovaOne(RegionsCollection)],
      RegionsFind: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToNova(RegionsCollection, async (_, args, ctx, info) => {
          const { container } = ctx;
          const regionCheckSuperVisor = container.get(RegionOwnerCheck);
          return regionCheckSuperVisor.checkIfSuperVisor(args, ctx);
        }),
      ],
      RegionsCount: [X.ToCollectionCount(RegionsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      RegionsInsertOne: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToModel(RegionInsertInput, { field: "document" }),
        async (_, args, ctx) => {
          const { container } = ctx;
          const regionInsertService = container.get(RegionInsertService);
          return regionInsertService.ToCheckRoleAndInsert(args.document, ctx);
        },
        X.ToNovaByResultID(RegionsCollection),
      ],
      RegionsUpdateOne: [
        // Todo : permission to update only owned documents

        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToModel(RegionUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(RegionsCollection),
        X.ToDocumentUpdateByID(RegionsCollection, null, ({ document }) => ({
          $set: document,
        })),

        X.ToNovaByResultID(RegionsCollection),
      ],
      RegionsDeleteOne: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
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
