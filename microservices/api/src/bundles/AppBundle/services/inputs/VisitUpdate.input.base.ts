/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class VisitCoordinatesInput {
  @Is(a.number().required())
  lat: number;

  @Is(a.number().required())
  lng: number;
}

@Schema()
export class VisitUpdateInput {
  @Is(() => Schema.from(VisitCoordinatesInput).nullable())
  coordinates?: VisitCoordinatesInput;

  @Is(an.objectId().nullable())
  doctorId?: ObjectId;

  @Is(a.string().nullable())
  information?: string;

  @Is(a.string().nullable())
  information2?: string;

  @Is(a.number().nullable())
  locationValidation?: number;

  @Is(an.objectId().nullable())
  rotationId?: ObjectId;
}
