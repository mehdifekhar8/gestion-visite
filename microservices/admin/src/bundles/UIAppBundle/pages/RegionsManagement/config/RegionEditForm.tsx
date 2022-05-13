import { Service } from "@bluelibs/core";
import { RegionEditForm as BaseRegionEditForm } from "./RegionEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Region } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RegionEditForm extends BaseRegionEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Region> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
