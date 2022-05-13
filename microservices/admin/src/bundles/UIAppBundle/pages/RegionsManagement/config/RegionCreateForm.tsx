import { Service } from "@bluelibs/core";
import { RegionCreateForm as BaseRegionCreateForm } from "./RegionCreateForm.base";

@Service({ transient: true })
export class RegionCreateForm extends BaseRegionCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
