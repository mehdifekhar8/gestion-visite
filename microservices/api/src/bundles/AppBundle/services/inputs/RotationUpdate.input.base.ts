/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { RotationRole } from "../../collections";

@Schema()
export class RotationUpdateInput {
  @Is(an.array().of(an.objectId()))
  doctorsListIds?: ObjectId[] = [];

  @Is(a.date().nullable())
  from?: Date;

  @Is(a.boolean().nullable())
  isDone?: boolean;

  @Is(an.array().of(a.string().oneOf(Object.values(RotationRole).concat(null))))
  roles?: RotationRole[] = [];

  @Is(a.date().nullable())
  to?: Date;

  @Is(an.objectId().nullable())
  userId?: ObjectId;
}
