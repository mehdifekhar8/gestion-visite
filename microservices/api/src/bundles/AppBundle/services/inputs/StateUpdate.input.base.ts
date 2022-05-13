/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class StateUpdateInput {
  @Is(a.string().nullable())
  state?: string;
}
