import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Region } from "@root/api.types";
import {
  UsersCollection,
  StatesCollection,
} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Region };

export class RegionsCollection extends Collection<Region> {
  getName() {
    return "Regions";
  }

  getInputs() {
    return {
      insert: "RegionInsertInput!",
      update: "RegionUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Region>[] {
    return [
      {
        collection: () => UsersCollection,
        name: "superVisor",
        field: "superVisorId",
      },
      {
        collection: () => StatesCollection,
        name: "statesList",
        many: true,
        field: "statesListIds",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Region> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
