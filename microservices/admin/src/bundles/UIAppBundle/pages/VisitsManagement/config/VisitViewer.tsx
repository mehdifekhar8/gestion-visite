import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Visit } from "@bundles/UIAppBundle/collections";
import { VisitViewer as BaseVisitViewer } from "./VisitViewer.base";

@Service({ transient: true })
export class VisitViewer extends BaseVisitViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Visit> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
