import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Rotation } from "@root/api.types";
import {
  UsersCollection,
  DoctorsCollection,
} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Rotation };

export class RotationsCollection extends Collection<Rotation> {
  getName() {
    return "Rotations";
  }

  getInputs() {
    return {
      insert: "RotationInsertInput!",
      update: "RotationUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Rotation>[] {
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
        collection: () => UsersCollection,
        name: "user",
        field: "userId",
      },
      {
        collection: () => DoctorsCollection,
        name: "doctorsList",
        many: true,
        field: "doctorsListIds",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Rotation> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
      from: (v) => (v && new Date(v) ? new Date(v) : v),
      to: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
