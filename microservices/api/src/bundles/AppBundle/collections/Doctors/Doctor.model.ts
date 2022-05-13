export * from "./Doctor.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Doctor as BaseDoctor } from "./Doctor.model.base";
export { DoctorCoordinates } from "./Doctor.model.base";
export { DoctorProfile } from "./Doctor.model.base";

@Schema()
export class Doctor extends BaseDoctor {
  // You can extend the base here
}
