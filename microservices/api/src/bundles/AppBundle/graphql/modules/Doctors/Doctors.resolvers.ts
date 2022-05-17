import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { DoctorInsertInput, DoctorUpdateInput } from "../../../services/inputs";
import { DoctorsCollection } from "../../../collections/Doctors/Doctors.collection";

export default {
  Query: [
    [],
    {
      DoctorsFindOne: [X.ToNovaOne(DoctorsCollection)],
      DoctorsFind: [X.ToNova(DoctorsCollection)],
      DoctorsCount: [X.ToCollectionCount(DoctorsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      DoctorsInsertOne: [
        X.ToModel(DoctorInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(DoctorsCollection),
       
        X.ToNovaByResultID(DoctorsCollection),
      ],
      DoctorsUpdateOne: [
        X.ToModel(DoctorUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(DoctorsCollection),
        X.ToDocumentUpdateByID(DoctorsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(DoctorsCollection),
      ],
      DoctorsDeleteOne: [
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
