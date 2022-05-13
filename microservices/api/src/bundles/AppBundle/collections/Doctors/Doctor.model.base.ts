/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { User } from "../";

@Schema()
export class DoctorCoordinates {
  @Is(a.string().required())
  lat: string;

  @Is(a.string().required())
  lng: string;
}
@Schema()
export class DoctorProfile {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class Doctor {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(() => Schema.from(DoctorCoordinates))
  coordinates: DoctorCoordinates;

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

  @Is(a.string().required())
  fullName: string;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.boolean().required())
  isEnabled: boolean;

  @Is(a.string().required())
  phone: string;

  @Is(() => Schema.from(DoctorProfile))
  profile: DoctorProfile;

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
