/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { User } from "../";
import { Doctor } from "../";
import { RotationType } from "./enums/RotationType.enum";
export { RotationType };

@Schema()
export class Rotation {
  @Is(an.objectId())
  _id?: ObjectId;

  /**
   * @description Represents the date when this object was created
   */
  @Is(a.date().required())
  createdAt: Date;

  /**
   * @description Represents the user who has created this object
   */
  createdBy?: User;

  /**
   * @description Represents the user's id who has created this object
   */
  @Is(an.objectId().nullable())
  createdById?: ObjectId;

  dateIntervale: string;

  doctorsList: Doctor[] = [];

  @Is(an.array().of(an.objectId()).required())
  doctorsListIds: ObjectId[] = [];

  @Is(a.date().required())
  from: Date;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

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
  type: RotationType[];

  /**
   * @description Represents the last time when the object was updated
   */
  @Is(a.date().required())
  updatedAt: Date;

  /**
   * @description Represents the user who has made the latest update on this object
   */
  updatedBy?: User;

  /**
   * @description Represents the user's id who has made the latest update on this object
   */
  @Is(an.objectId().nullable())
  updatedById?: ObjectId;

  user: User;

  @Is(an.objectId().required())
  userId: ObjectId;
}
