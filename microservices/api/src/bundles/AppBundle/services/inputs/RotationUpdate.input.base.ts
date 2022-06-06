/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { RotationType } from "../../collections";

@Schema()
export class RotationUpdateInput {
  @Is(an.array().of(an.objectId()))
  doctorsListIds?: ObjectId[] = [];

  @Is(a.date().nullable())
  from?: Date;

  @Is(a.boolean().nullable())
  isDone?: boolean;

  @Is(a.date().nullable())
  to?: Date;

  @Is(an.array().of(a.string().oneOf(Object.values(RotationType).concat(null))))
  type?: RotationType[] = [];

  @Is(an.objectId().nullable())
  userId?: ObjectId;
}
