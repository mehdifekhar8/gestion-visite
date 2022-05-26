import { RotationsCollection } from "../Rotations/Rotations.collection";
import { DoctorsCollection } from "../Doctors/Doctors.collection";
import { UsersCollection } from "../Users/Users.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const createdBy: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "createdById",
};

export const updatedBy: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "updatedById",
};

export const doctor: IBundleLinkCollectionOption = {
  collection: () => DoctorsCollection,
  field: "doctorId",
};

export const rotation: IBundleLinkCollectionOption = {
  collection: () => RotationsCollection,
  field: "rotationId",
};
