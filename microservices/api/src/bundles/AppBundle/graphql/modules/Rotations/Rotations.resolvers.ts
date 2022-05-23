import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  RotationInsertInput,
  RotationUpdateInput,
} from "../../../services/inputs";
import { RotationsCollection } from "../../../collections/Rotations/Rotations.collection";
import { UserRole, UsersCollection } from "@bundles/AppBundle/collections";

export default {
  Query: [
    [],
    {
      RotationsFindOne: [X.CheckLoggedIn(), X.ToNovaOne(RotationsCollection)],
      RotationsFind: [
        X.CheckLoggedIn(),
        X.ToNova(RotationsCollection, async (_, args, ctx, info) => {
          const { container } = ctx;
          const usersCollection = container.get(UsersCollection);
          const currentUser = await usersCollection.findOne({
            _id: ctx.userId,
          });
          console.log(args.query);
          if (currentUser.roles.includes(UserRole.ADMIN)) {
            console.log("enter");
            return args.query;
          } else if (
            currentUser.roles.includes(UserRole.REGION_ADMINISTRATOR)
          ) {
            args.query = {
              filters: { createdById: ctx.userId },
            };
            return args.query;
          } else if (currentUser.roles.includes(UserRole.DELEGATE)) {
            args.query = { filters: { userId: ctx.userId } };
            return args.query;
          }
        }),
      ],
      RotationsCount: [X.ToCollectionCount(RotationsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      RotationsInsertOne: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToModel(RotationInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(RotationsCollection),
        X.ToNovaByResultID(RotationsCollection),
      ],
      RotationsUpdateOne: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToModel(RotationUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(RotationsCollection),
        X.ToDocumentUpdateByID(RotationsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(RotationsCollection),
      ],
      RotationsDeleteOne: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.CheckDocumentExists(RotationsCollection),
        X.ToDocumentDeleteByID(RotationsCollection),
      ],
    },
  ],
  Subscription: {
    RotationsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(RotationsCollection)],
    },
    RotationsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(RotationsCollection)],
    },
  },
} as IResolverMap;
