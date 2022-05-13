import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Region } from "@bundles/UIAppBundle/collections";
import { RegionViewer as BaseRegionViewer } from "./RegionViewer.base";

@Service({ transient: true })
export class RegionViewer extends BaseRegionViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Region> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
