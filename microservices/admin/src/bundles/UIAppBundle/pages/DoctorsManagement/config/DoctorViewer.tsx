import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Doctor } from "@bundles/UIAppBundle/collections";
import { DoctorViewer as BaseDoctorViewer } from "./DoctorViewer.base";

@Service({ transient: true })
export class DoctorViewer extends BaseDoctorViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Doctor> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
