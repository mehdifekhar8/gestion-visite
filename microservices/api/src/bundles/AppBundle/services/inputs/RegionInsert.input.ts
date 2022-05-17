import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ObjectId } from "mongodb";
import { RegionInsertInput as BaseRegionInsertInput } from "./RegionInsert.input.base";

@Schema()
export class RegionInsertInput extends BaseRegionInsertInput {

}
