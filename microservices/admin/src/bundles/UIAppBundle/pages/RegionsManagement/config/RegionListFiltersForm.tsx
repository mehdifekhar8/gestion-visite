import { Service } from "@bluelibs/core";
import { RegionListFiltersForm as BaseRegionListFiltersForm } from "./RegionListFiltersForm.base";

@Service({ transient: true })
export class RegionListFiltersForm extends BaseRegionListFiltersForm {
  build() {
    super.build();
     this.update("updatedAt",{
       order:3
     })
     this.update("createdAt",{
      order:2
    })
     this.update("name",{
      order:0
    })
    this.update("superVisorId",{
      order:1
    })
    this.update("statesListIds",{
      order:4
    })
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
