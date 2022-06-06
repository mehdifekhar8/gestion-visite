import { Service } from "@bluelibs/core";
import { RotationEditForm as BaseRotationEditForm } from "./RotationEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Rotation } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RotationEditForm extends BaseRotationEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Rotation> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
