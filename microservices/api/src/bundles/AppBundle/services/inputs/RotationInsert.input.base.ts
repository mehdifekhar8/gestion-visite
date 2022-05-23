/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { RotationRole } from "../../collections";

@Schema()
export class RotationInsertInput {
  @Is(an.array().of(an.objectId()).required())
  doctorsListIds: ObjectId[] = [];

  @Is(a.date().required())
  from: Date;

  @Is(a.boolean().required())
  isDone: boolean = false;

  @Is(
    an
      .array()
      .of(a.string().oneOf(Object.values(RotationRole).concat(null)))
      .required()
  )
  roles: RotationRole[] = [];

  @Is(a.date().required())
  to: Date;

  @Is(an.objectId().required())
  userId: ObjectId;
}
