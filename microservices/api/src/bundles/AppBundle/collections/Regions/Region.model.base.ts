/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { State } from "../";
import { User } from "../";

@Schema()
export class Region {
  @Is(an.objectId())
  _id?: ObjectId;

  /**
   * @description Represents the date when this object was created
   */
  @Is(a.date().required())
  createdAt: Date;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.string().required())
  name: string;

  statesList: State[] = [];

  @Is(an.array().of(an.objectId()).required())
  statesListIds: ObjectId[] = [];

  superVisor?: User;

  @Is(an.objectId().nullable())
  superVisorId?: ObjectId;

  /**
   * @description Represents the last time when the object was updated
   */
  @Is(a.date().required())
  updatedAt: Date;

  usersList: User[] = [];
}
