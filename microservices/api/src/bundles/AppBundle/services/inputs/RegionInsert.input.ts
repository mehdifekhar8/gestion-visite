import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { RegionInsertInput as BaseRegionInsertInput } from "./RegionInsert.input.base";

@Schema()
export class RegionInsertInput extends BaseRegionInsertInput {
  // You can extend the base here
}
