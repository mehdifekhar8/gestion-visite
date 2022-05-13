import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { UserInsertInput, UserUpdateInput } from "../../../services/inputs";
import { UsersCollection } from "../../../collections/Users/Users.collection";
import { UserRegistrationInput } from "@bundles/AppBundle/services/inputs/UserRegistration.input";
import { XPasswordService } from "@bluelibs/x-password-bundle/dist/services/XPasswordService";
import { UserRole } from "@bundles/AppBundle/collections/Users";
import { AppSecurityService } from "@bundles/AppBundle/services/AppSecurity.service";

export default {
  Query: [
    [],
    {
      UsersFindOne: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToNovaOne(UsersCollection, async (_, args, ctx, info) => {
          const { container } = ctx;
          const usersCollection = container.get(UsersCollection);
          const currentUser = await usersCollection.findOne({
            _id: ctx.userId,
          });
          if (!currentUser.roles.includes(UserRole.ADMIN))
            args.query = {
              filters: { createdById: ctx.userId },
            };
          console.log(args);
          return args.query;
        }),
      ],
      UsersFind: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToNova(UsersCollection, async (_, args, ctx, info) => {
          const { container } = ctx;
          const usersCollection = container.get(UsersCollection);
          const currentUser = await usersCollection.findOne({
            _id: ctx.userId,
          });
          if (!currentUser.roles.includes(UserRole.ADMIN))
            args.query = {
              filters: { createdById: ctx.userId },
            };
          console.log(args);
          return args.query;
        }),
      ],
      UsersCount: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToCollectionCount(UsersCollection),
      ],
    },
  ],
  Mutation: [
    [],
    {
      UsersInsertOne: [
        X.ToModel(UserInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(UsersCollection),
        X.ToNovaByResultID(UsersCollection),
      ],
      UsersUpdateOne: [
        X.CheckLoggedIn(),
        X.ToModel(UserUpdateInput, { field: "document" }),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.Validate({ field: "document" }),

        // Todo : permission to update only owned documents
        async (_, args, ctx) => {
          const { container } = ctx;
          const securityService = container.get(AppSecurityService);
          await securityService.checkPermission(
            args.document.roles,
            ctx.userId
          );
        },
        X.CheckDocumentExists(UsersCollection),
        X.ToDocumentUpdateByID(UsersCollection, null, ({ document }) => ({
          $set: document,
        })),

        X.ToNovaByResultID(UsersCollection),
      ],
      UsersDeleteOne: [
        X.CheckPermission([UserRole.ADMIN]),
        X.CheckDocumentExists(UsersCollection),
        X.ToDocumentDeleteByID(UsersCollection),
      ],
      UserRegistration: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        X.ToModel(UserRegistrationInput, { field: "document" }),
        X.Validate({ field: "document" }),

        async (_, args, ctx) => {
          const { container } = ctx;
          const xPasswordService = container.get(XPasswordService);
          const collection = container.get(UsersCollection);
          const securityService = container.get(AppSecurityService);
          await securityService.checkPermission(
            args.document.roles,
            ctx.userId
          );
          await securityService.checkEmailIsUniqueAndNotOwn(
            args.document.email,
            ctx.userId
          );

          const { userId } = await xPasswordService.register({
            email: args.document.email,
            password: args.document.password,
            firstName: args.document.profile.firstName,
            lastName: args.document.profile.lastName,
          });
          await collection.updateOne(
            { _id: userId },
            {
              $set: { roles: [UserRole.DELEGATE] , createdById:ctx.userId  },
            }
          );
          return userId;
        },
      ],
    },
  ],
  Subscription: {
    UsersSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(UsersCollection)],
    },
    UsersSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(UsersCollection)],
    },
  },
} as IResolverMap;
