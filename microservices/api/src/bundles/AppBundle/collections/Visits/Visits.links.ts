import { DoctorsCollection } from "../Doctors/Doctors.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const doctor: IBundleLinkCollectionOption = {
  collection: () => DoctorsCollection,
  field: "doctorId",
};
