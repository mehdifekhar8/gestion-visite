export * from "./Visit.model.base";
export * from "./Visit.model.base";

import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Visit as BaseVisit } from "./Visit.model.base";
export {Visit as VisitProfile } from "./Visit.model.base";

@Schema()
export class Visit extends BaseVisit {
  // You can extend the base here
}
