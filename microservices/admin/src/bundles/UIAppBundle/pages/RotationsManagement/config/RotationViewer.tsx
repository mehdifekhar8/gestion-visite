import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Rotation } from "@bundles/UIAppBundle/collections";
import { RotationViewer as BaseRotationViewer } from "./RotationViewer.base";

@Service({ transient: true })
export class RotationViewer extends BaseRotationViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Rotation> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
