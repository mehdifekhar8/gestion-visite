import { Service } from "@bluelibs/core";
import { useGuardian } from "@bluelibs/x-ui-guardian-bundle";
import { DoctorCreateForm as BaseDoctorCreateForm } from "./DoctorCreateForm.base";
import * as Ant from "antd";
import { AddMarker } from "@bundles/UIAppBundle/components/Map/AddMarker";

@Service({ transient: true })
export class DoctorCreateForm extends BaseDoctorCreateForm {
  build() {
    super.build();
    const guardian = useGuardian();
    if (
      !(guardian.hasRole("ADMIN") || guardian.hasRole("REGION_ADMINISTRATOR"))
    ) {
      this.remove("regionId");
    }
    this.update("coordinates", {
      render: (props: { onChange: () => void; value: string } & any) => (
        <Ant.Form.Item name="body" {...props}>
          <AddMarker onChange={props.onChange}></AddMarker>
        </Ant.Form.Item>
      ),
    });
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
