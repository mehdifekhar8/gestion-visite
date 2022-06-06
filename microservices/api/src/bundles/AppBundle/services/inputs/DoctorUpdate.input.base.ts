/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class DoctorAddressInput {
  @Is(a.string().nullable())
  wilaya?: string;

  @Is(a.string().nullable())
  daira?: string;

  @Is(a.string().nullable())
  commune?: string;
}
@Schema()
export class DoctorCoordinatesInput {
  @Is(a.number().required())
  lat: number;

  @Is(a.number().required())
  lng: number;
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
  @Is(() => Schema.from(DoctorAddressInput).nullable())
  address?: DoctorAddressInput;

  @Is(() => Schema.from(DoctorCoordinatesInput).nullable())
  coordinates?: DoctorCoordinatesInput;

  @Is(a.boolean().nullable())
  isEnabled?: boolean;

  @Is(a.string().nullable())
  phone?: string;

  @Is(() => Schema.from(DoctorProfileInput).nullable())
  profile?: DoctorProfileInput;

  @Is(an.objectId().nullable())
  regionId?: ObjectId;
}
