import { Service } from "@bluelibs/core";
import { RegionListFiltersForm as BaseRegionListFiltersForm } from "./RegionListFiltersForm.base";

@Service({ transient: true })
export class RegionListFiltersForm extends BaseRegionListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
