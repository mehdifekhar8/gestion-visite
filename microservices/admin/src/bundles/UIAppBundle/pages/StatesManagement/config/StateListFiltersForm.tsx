import { Service } from "@bluelibs/core";
import { StateListFiltersForm as BaseStateListFiltersForm } from "./StateListFiltersForm.base";

@Service({ transient: true })
export class StateListFiltersForm extends BaseStateListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
