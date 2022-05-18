import { Service } from "@bluelibs/core";
import { useGuardian } from "@bluelibs/x-ui-guardian-bundle";
import { DoctorCreateForm as BaseDoctorCreateForm } from "./DoctorCreateForm.base";

@Service({ transient: true })
export class DoctorCreateForm extends BaseDoctorCreateForm {
  build() {
    super.build();
    const guardian = useGuardian();
    if (
      !(guardian.hasRole("ADMIN") || guardian.hasRole("REGION_ADMINISTRATOR"))
    ) {
      this.remove("regionId");
    }
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
