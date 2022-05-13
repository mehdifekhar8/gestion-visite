import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { State } from "@bundles/UIAppBundle/collections";
import { StateList as BaseStateList } from "./StateList.base";

@Service({ transient: true })
export class StateList extends BaseStateList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<State> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
