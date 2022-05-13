import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { StateUpdateInput as BaseStateUpdateInput } from "./StateUpdate.input.base";

@Schema()
export class StateUpdateInput extends BaseStateUpdateInput {
  // You can extend the base here
}
