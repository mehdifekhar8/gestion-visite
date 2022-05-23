import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Rotation } from "@bundles/UIAppBundle/collections";
import { RotationList as BaseRotationList } from "./RotationList.base";

@Service({ transient: true })
export class RotationList extends BaseRotationList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Rotation> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
