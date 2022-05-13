import { Service } from "@bluelibs/core";
import { VisitCreateForm as BaseVisitCreateForm } from "./VisitCreateForm.base";

@Service({ transient: true })
export class VisitCreateForm extends BaseVisitCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
