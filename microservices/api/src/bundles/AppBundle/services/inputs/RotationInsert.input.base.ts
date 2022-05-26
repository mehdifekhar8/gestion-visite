/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { RotationType } from "../../collections";

@Schema()
export class RotationInsertInput {
  @Is(an.array().of(an.objectId()).required())
  doctorsListIds: ObjectId[] = [];

  @Is(a.date().required())
  from: Date;

  @Is(a.boolean().required())
  isDone: boolean = false;

  @Is(a.date().required())
  to: Date;

  @Is(
    an
      .array()
      .of(a.string().oneOf(Object.values(RotationType).concat(null)))
      .required()
  )
  type: RotationType[] = [];

  @Is(an.objectId().required())
  userId: ObjectId;
}
