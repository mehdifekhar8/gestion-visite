import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Visit } from "@root/api.types";
import { DoctorsCollection } from "@bundles/UIAppBundle/collections";
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
        collection: () => DoctorsCollection,
        name: "doctor",
        field: "doctorId",
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
