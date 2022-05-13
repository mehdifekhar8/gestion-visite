import { Service } from "@bluelibs/core";
import { DoctorCreateForm as BaseDoctorCreateForm } from "./DoctorCreateForm.base";

@Service({ transient: true })
export class DoctorCreateForm extends BaseDoctorCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
