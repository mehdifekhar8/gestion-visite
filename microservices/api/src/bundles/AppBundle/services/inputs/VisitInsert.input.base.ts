/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class VisitInsertInput {
  @Is(an.objectId().required())
  doctorId: ObjectId;

  @Is(a.string().required())
  information: string;
}
