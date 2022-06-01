import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { VisitInsertInput, VisitUpdateInput } from "../../../services/inputs";
import { VisitsCollection } from "../../../collections/Visits/Visits.collection";
import {
  DoctorsCollection,
  UserRole,
  UsersCollection,
} from "@bundles/AppBundle/collections";
import { ISecureOptions, lookup, query } from "@bluelibs/nova";
import { ObjectId } from "mongodb";
import { CreateVisitService } from "@bundles/AppBundle/services/CreateVisit.service";

export default {
  Query: [
    [],
    {
      VisitsFindOne: [X.ToNovaOne(VisitsCollection)],
      VisitsFind: [
        async (_, args, ctx, info) => {
          const { container } = ctx;
          const visitsCollection = container.get(VisitsCollection);
          const doctorsCollection = container.get(DoctorsCollection);
          const usersCollection = container.get(UsersCollection);
          const currentUser = await usersCollection.findOne({
            _id: ctx.userId,
          });
          console.log("enter");
          const result = await visitsCollection.queryGraphQL(info, {
            embody(body, getArguments): any {
              if (currentUser.roles.includes(UserRole.ADMIN)) {
                body.$ = {
                  ...body.$,
                  filters: { ...body.$.filters, ...args.query.filters },
                };
              } else if (
                currentUser.roles.includes(UserRole.REGION_ADMINISTRATOR)
              ) {
                body.$ = {
                  ...body.$,
                  pipeline: [
                    lookup(visitsCollection.collection, "doctor", {
                      pipeline: [
                        lookup(doctorsCollection.collection, "region"),
                        {
                          $match: {
                            "region.superVisorId": ctx.userId,
                          },
                        },
                      ],
                    }),

                    {
                      $match: {
                        "doctor.isEnabled": true,
                        ...args.query.filters,
                      },
                    },
                  ],
                };
              } else if (currentUser.roles.includes(UserRole.DELEGATE)) {
                body.$ = {
                  ...body.$,
                  filters: { ...body.$.filters, createdById: ctx.userId ,  ...args.query.filters,},
                };
              }
              console.log(body.$);
            },
          });
          console.log(result.length);
          return result;
        },
      ],
      VisitsCount: [X.ToCollectionCount(VisitsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      VisitsInsertOne: [
        X.ToModel(VisitInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        async (_, args, ctx) => {
          const { container } = ctx;
          const insertVisit = container.get(CreateVisitService);
          const result = await insertVisit.createNewVisit(args, ctx);
          console.log(result);
          return result.insertedId;
        },
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
