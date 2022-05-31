export * from "./Rotation.model.base";
export * from "./Rotation.model.base";
export * from "./Rotation.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Rotation as BaseRotation } from "./Rotation.model.base";
export { RotationRole } from "./enums/RotationRole.enum";

@Schema()
export class Rotation extends BaseRotation {
  // You can extend the base here
}
