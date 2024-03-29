import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./Rotations.links";
import * as reducers from "./Rotations.reducers";
import { Rotation } from "./Rotation.model";

export class RotationsCollection extends Collection<Rotation> {
  static collectionName = "rotations";
  static model = Rotation;

  static links = links;
  static reducers = reducers;

  static behaviors = [
    Behaviors.Timestampable(),

    Behaviors.Blameable(),

    Behaviors.Softdeletable(),

    XBehaviors.Live(),
  ];

  // Create an array of indexes
  static indexes = [
    { key: { isDeleted: 1 } },
    { key: { createdAt: 1 } },
    { key: { createdBy: 1 } },
  ];
}
