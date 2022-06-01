import { Service } from "@bluelibs/core";
import { RotationListFiltersForm as BaseRotationListFiltersForm } from "./RotationListFiltersForm.base";

@Service({ transient: true })
export class RotationListFiltersForm extends BaseRotationListFiltersForm {
  build() {
    super.build();
    this.remove("type");
    this.update("userId", {
      order: 0,
    });
    this.update("doctorsListIds", {
      order: 1,
    });
    this.update("createdById", {
      order: 2,
    });
    this.update("updatedById", {
      order: 3,
    });
    this.update("createdAt", {
      order: 4,
    });
    this.update("updatedAt", {
      order: 5,
    });
    this.update("from", {
      order: 6,
    });
    this.update("to", {
      order: 7,
    });
    this.update("isDone", {
      order: 8,
    });
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
