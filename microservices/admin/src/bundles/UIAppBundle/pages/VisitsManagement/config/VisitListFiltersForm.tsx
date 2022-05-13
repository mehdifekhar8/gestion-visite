import { Service } from "@bluelibs/core";
import { VisitListFiltersForm as BaseVisitListFiltersForm } from "./VisitListFiltersForm.base";

@Service({ transient: true })
export class VisitListFiltersForm extends BaseVisitListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
