import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Doctor } from "@root/api.types";
import { UsersCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Doctor };

export class DoctorsCollection extends Collection<Doctor> {
  getName() {
    return "Doctors";
  }

  getInputs() {
    return {
      insert: "DoctorInsertInput!",
      update: "DoctorUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Doctor>[] {
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
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Doctor> {
    return {
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
