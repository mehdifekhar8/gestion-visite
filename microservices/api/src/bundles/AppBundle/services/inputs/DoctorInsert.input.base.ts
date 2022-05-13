/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class DoctorCoordinatesInput {
  @Is(a.string().required())
  lat: string;

  @Is(a.string().required())
  lng: string;
}
@Schema()
export class DoctorProfileInput {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class DoctorInsertInput {
  @Is(() => Schema.from(DoctorCoordinatesInput))
  coordinates: DoctorCoordinatesInput;

  @Is(a.string().required())
  fullName: string;

  @Is(a.boolean().required())
  isEnabled: boolean;

  @Is(a.string().required())
  phone: string;

  @Is(() => Schema.from(DoctorProfileInput))
  profile: DoctorProfileInput;
}
