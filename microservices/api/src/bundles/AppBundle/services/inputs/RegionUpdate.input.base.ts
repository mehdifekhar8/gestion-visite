/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class RegionUpdateInput {
  @Is(a.string().nullable())
  name?: string;

  @Is(an.array().of(an.objectId()))
  statesListIds?: ObjectId[] = [];

  @Is(an.objectId().nullable())
  superVisorId?: ObjectId;

  @Is(an.array().of(an.objectId()))
  usersListIds?: ObjectId[] = [];
}
