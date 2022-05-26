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
export class VisitInsertInput {
  @Is(() => Schema.from(VisitCoordinatesInput))
  coordinates: VisitCoordinatesInput;

  @Is(an.objectId().required())
  doctorId: ObjectId;

  @Is(a.string().required())
  information: string;

  @Is(a.string().required())
  information2: string;

  @Is(a.number().required())
  locationValidation: number;

  @Is(an.objectId().nullable())
  rotationId?: ObjectId;
}
