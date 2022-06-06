/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class RegionInsertInput {
  @Is(a.string().required())
  name: string;

  @Is(an.array().of(an.objectId()).required())
  statesListIds: ObjectId[] = [];

  @Is(an.objectId().nullable())
  superVisorId?: ObjectId;
}
