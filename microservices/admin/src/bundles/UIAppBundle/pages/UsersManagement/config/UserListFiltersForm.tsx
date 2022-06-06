import { Service } from "@bluelibs/core";
import { UserListFiltersForm as BaseUserListFiltersForm } from "./UserListFiltersForm.base";

@Service({ transient: true })
export class UserListFiltersForm extends BaseUserListFiltersForm {
  build() {
    
    super.build();
    this.update("profile", {
      order: 0,
    });
    this.update("roles", {
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
    this.update("regionId", {
      order: 6,
    });
    this.update("isEnabled", {
      order: 7,
    });
  this.remove("isEnabled");
  
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
