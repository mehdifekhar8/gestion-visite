import { Service } from "@bluelibs/core";
import { VisitListFiltersForm as BaseVisitListFiltersForm } from "./VisitListFiltersForm.base";

@Service({ transient: true })
export class VisitListFiltersForm extends BaseVisitListFiltersForm {
  build() {
    super.build();
  this.update("information", {
    order:9
  })
  this.update("createdById", {
    order:0
  })
  this.update("updatedById", {
    order:1
  })
  this.update("information", {
    order:2
  })
  this.update("information2", {
    order:3
  })
  this.update("doctorId", {
    order:4
  })
  this.update("locationValidation", {
    order:5
  })
  this.update("createdAt", {
    order:6
  })
  this.update("updatedAt", {
    order:7
  })
  
  this.remove("coordinates")
  if(process.env.MODE != "advanced") {
    this.remove("rotationId")
  }
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
