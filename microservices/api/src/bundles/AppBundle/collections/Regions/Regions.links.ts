import { StatesCollection } from "../States/States.collection";
import { UsersCollection } from "../Users/Users.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const superVisor: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "superVisorId",
};

export const statesList: IBundleLinkCollectionOption = {
  collection: () => StatesCollection,
  many: true,
  field: "statesListIds",
};

export const usersList: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  many: true,
  inversedBy: "region",
};
