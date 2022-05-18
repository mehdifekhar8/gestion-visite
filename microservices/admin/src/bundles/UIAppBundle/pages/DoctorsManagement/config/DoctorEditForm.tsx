import { Service } from "@bluelibs/core";
import { DoctorEditForm as BaseDoctorEditForm } from "./DoctorEditForm.base";
import { QueryBodyType, useGuardian } from "@bluelibs/x-ui";
import { Doctor } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DoctorEditForm extends BaseDoctorEditForm {
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

  static getRequestBody(): QueryBodyType<Doctor> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
