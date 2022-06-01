import { Service } from "@bluelibs/core";
import { VisitEditForm as BaseVisitEditForm } from "./VisitEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Visit } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class VisitEditForm extends BaseVisitEditForm {
  build() {
    super.build();
    if(process.env.MODE!="advanced") {
      this.remove("rotationId")
    }
    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Visit> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
