import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { DoctorUpdateInput as BaseDoctorUpdateInput } from "./DoctorUpdate.input.base";

@Schema()
export class DoctorUpdateInput extends BaseDoctorUpdateInput {
  // You can extend the base here
}
