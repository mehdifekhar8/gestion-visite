import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { StateInsertInput as BaseStateInsertInput } from "./StateInsert.input.base";

@Schema()
export class StateInsertInput extends BaseStateInsertInput {
  // You can extend the base here
}
