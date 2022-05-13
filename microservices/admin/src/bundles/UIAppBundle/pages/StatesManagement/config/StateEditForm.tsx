import { Service } from "@bluelibs/core";
import { StateEditForm as BaseStateEditForm } from "./StateEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { State } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StateEditForm extends BaseStateEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<State> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
