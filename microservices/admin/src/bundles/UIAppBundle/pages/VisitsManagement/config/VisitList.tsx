import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Visit } from "@bundles/UIAppBundle/collections";
import { VisitList as BaseVisitList } from "./VisitList.base";

@Service({ transient: true })
export class VisitList extends BaseVisitList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Visit> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
