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
export class DoctorUpdateInput {
  @Is(() => Schema.from(DoctorCoordinatesInput).nullable())
  coordinates?: DoctorCoordinatesInput;

  @Is(a.string().nullable())
  fullName?: string;

  @Is(a.boolean().nullable())
  isEnabled?: boolean;

  @Is(a.string().nullable())
  phone?: string;

  @Is(() => Schema.from(DoctorProfileInput).nullable())
  profile?: DoctorProfileInput;
}
