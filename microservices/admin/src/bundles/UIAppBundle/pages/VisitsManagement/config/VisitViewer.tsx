import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Visit } from "@bundles/UIAppBundle/collections";
import { VisitViewer as BaseVisitViewer } from "./VisitViewer.base";

@Service({ transient: true })
export class VisitViewer extends BaseVisitViewer {
  build() {
    super.build();
    this.update("coordinates.lng", {
      render: (value) => {
        const props = {
          type: "number",
          value:value.toFixed(2),
        };
        return <this.UIComponents.AdminListItemRenderer {...props} />;
      },
     })
     this.update("coordinates.lat", {
      render: (value) => {
        const props = {
          type: "number",
          value:value.toFixed(2),
        };
        return <this.UIComponents.AdminListItemRenderer {...props} />;
      },
     })
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
