import { Service } from "@bluelibs/core";
import { RotationCreateForm as BaseRotationCreateForm } from "./RotationCreateForm.base";

@Service({ transient: true })
export class RotationCreateForm extends BaseRotationCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
