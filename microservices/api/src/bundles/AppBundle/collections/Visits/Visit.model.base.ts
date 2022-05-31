/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { User } from "../";
import { Doctor } from "../";
import { Rotation } from "../";

@Schema()
export class VisitCoordinates {
  @Is(a.number().required())
  lat: number;

  @Is(a.number().required())
  lng: number;
}

@Schema()
export class Visit {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(() => Schema.from(VisitCoordinates))
  coordinates: VisitCoordinates;

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

  doctor: Doctor;

  @Is(an.objectId().required())
  doctorId: ObjectId;

  @Is(a.string().required())
  information: string;

  @Is(a.string().required())
  information2: string;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.number().nullable())
  locationValidation?: number;

  rotation?: Rotation;

  @Is(an.objectId().nullable())
  rotationId?: ObjectId;

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
}
