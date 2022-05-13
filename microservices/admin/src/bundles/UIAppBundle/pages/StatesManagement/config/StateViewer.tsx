import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { State } from "@bundles/UIAppBundle/collections";
import { StateViewer as BaseStateViewer } from "./StateViewer.base";

@Service({ transient: true })
export class StateViewer extends BaseStateViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<State> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
