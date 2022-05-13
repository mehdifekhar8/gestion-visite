import { Service } from "@bluelibs/core";
import { DoctorEditForm as BaseDoctorEditForm } from "./DoctorEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Doctor } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DoctorEditForm extends BaseDoctorEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Doctor> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
