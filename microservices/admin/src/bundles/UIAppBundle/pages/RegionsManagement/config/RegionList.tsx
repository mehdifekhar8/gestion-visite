import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Region } from "@bundles/UIAppBundle/collections";
import { RegionList as BaseRegionList } from "./RegionList.base";

@Service({ transient: true })
export class RegionList extends BaseRegionList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Region> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
