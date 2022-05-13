import { Service } from "@bluelibs/core";
import { StateCreateForm as BaseStateCreateForm } from "./StateCreateForm.base";

@Service({ transient: true })
export class StateCreateForm extends BaseStateCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
