import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { State } from "@root/api.types";
import {} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { State };

export class StatesCollection extends Collection<State> {
  getName() {
    return "States";
  }

  getInputs() {
    return {
      insert: "StateInsertInput!",
      update: "StateUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<State>[] {
    return [];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<State> {
    return {};
  }
}
