/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class VisitUpdateInput {
  @Is(an.objectId().nullable())
  doctorId?: ObjectId;

  @Is(a.string().nullable())
  information?: string;
}
