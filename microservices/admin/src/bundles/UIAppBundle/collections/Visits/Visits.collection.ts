import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Visit } from "@root/api.types";
import {
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Visit };

export class VisitsCollection extends Collection<Visit> {
  getName() {
    return "Visits";
  }

  getInputs() {
    return {
      insert: "VisitInsertInput!",
      update: "VisitUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Visit>[] {
    return [
      {
        collection: () => UsersCollection,
        name: "createdBy",
        field: "createdById",
      },
      {
        collection: () => UsersCollection,
        name: "updatedBy",
        field: "updatedById",
      },
      {
        collection: () => DoctorsCollection,
        name: "doctor",
        field: "doctorId",
      },
      {
        collection: () => RotationsCollection,
        name: "rotation",
        field: "rotationId",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Visit> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
