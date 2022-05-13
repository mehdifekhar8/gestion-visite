export * from "./State.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { State as BaseState } from "./State.model.base";

@Schema()
export class State extends BaseState {
  // You can extend the base here
}
