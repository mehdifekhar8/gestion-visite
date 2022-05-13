export * from "./Region.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Region as BaseRegion } from "./Region.model.base";
export { Region  as RegionProfile } from "./Region.model.base";

@Schema()
export class Region extends BaseRegion {
  // You can extend the base here
}
