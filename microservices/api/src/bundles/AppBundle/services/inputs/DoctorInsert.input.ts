import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { DoctorInsertInput as BaseDoctorInsertInput } from "./DoctorInsert.input.base";

@Schema()
export class DoctorInsertInput extends BaseDoctorInsertInput {
  // You can extend the base here
}
