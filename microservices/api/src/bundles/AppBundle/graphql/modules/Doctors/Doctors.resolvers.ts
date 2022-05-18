import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { DoctorInsertInput, DoctorUpdateInput } from "../../../services/inputs";
import { DoctorsCollection } from "../../../collections/Doctors/Doctors.collection";
import { CreateDoctorService } from "@bundles/AppBundle/services/CreateDoctor.service";
import { UserRole, UsersCollection } from "@bundles/AppBundle/collections";

export default {
  Query: [
    [],
    {
      //todo check that every thing is correct
      DoctorsFindOne: [X.ToNovaOne(DoctorsCollection)],
      DoctorsFind: [
        X.ToNova(DoctorsCollection),
        X.ToNova(DoctorsCollection, async (_, args, ctx, info) => {
          const { container } = ctx;
          const usersCollection = container.get(UsersCollection);
          const currentUser = await usersCollection.findOne({
            _id: ctx.userId,
          });
          if (
            !(
              currentUser.roles.includes(UserRole.ADMIN) ||
              currentUser.roles.includes(UserRole.REGION_ADMINISTRATOR)
            )
          )
            args.query = {
              filters: { regionId: currentUser.regionId },
            };
          return args.query;
        }),
      ],
      DoctorsCount: [X.ToCollectionCount(DoctorsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      DoctorsInsertOne: [
        X.CheckLoggedIn(),
        X.ToModel(DoctorInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        async (_, args, ctx) => {
          const { container } = ctx;
          const insertDoctor = container.get(CreateDoctorService);
          const result = await insertDoctor.createNewDoctor(args, ctx);
          console.log(result);
          return result.insertedId;
        },

        X.ToNovaByResultID(DoctorsCollection),
      ],
      DoctorsUpdateOne: [
        X.CheckLoggedIn(),
        X.ToModel(DoctorUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        //todo check that every thing is correct

        X.CheckDocumentExists(DoctorsCollection),
        X.ToDocumentUpdateByID(DoctorsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(DoctorsCollection),
      ],
      DoctorsDeleteOne: [
        X.CheckLoggedIn(),
        X.CheckPermission([UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR]),
        //todo check that every thing is correct
        X.CheckDocumentExists(DoctorsCollection),
        X.ToDocumentDeleteByID(DoctorsCollection),
      ],
    },
  ],
  Subscription: {
    DoctorsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(DoctorsCollection)],
    },
    DoctorsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(DoctorsCollection)],
    },
  },
} as IResolverMap;
