import { Service } from "@bluelibs/core";
import { RotationListFiltersForm as BaseRotationListFiltersForm } from "./RotationListFiltersForm.base";

@Service({ transient: true })
export class RotationListFiltersForm extends BaseRotationListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
