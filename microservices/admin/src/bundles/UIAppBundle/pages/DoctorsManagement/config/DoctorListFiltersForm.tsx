import { Service } from "@bluelibs/core";
import { DoctorListFiltersForm as BaseDoctorListFiltersForm } from "./DoctorListFiltersForm.base";

@Service({ transient: true })
export class DoctorListFiltersForm extends BaseDoctorListFiltersForm {
  build() {
    super.build();
   this.remove("coordinates")
   this.remove("isEnabled")
   this.remove("createdAt")
   this.remove("updatedAt")
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
