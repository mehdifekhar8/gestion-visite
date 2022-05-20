import { Service } from "@bluelibs/core";
import { DoctorEditForm as BaseDoctorEditForm } from "./DoctorEditForm.base";
import { QueryBodyType, useGuardian } from "@bluelibs/x-ui";
import { Doctor } from "@bundles/UIAppBundle/collections";
import * as Ant from "antd";
import { UpdateMarker } from "@bundles/UIAppBundle/components/Map/UpdateMarker";

@Service({ transient: true })
export class DoctorEditForm extends BaseDoctorEditForm {
  build() {
    super.build();
    const guardian = useGuardian();
    if (
      !(guardian.hasRole("ADMIN") || guardian.hasRole("REGION_ADMINISTRATOR"))
    ) {
      this.remove("regionId");
    }
    this.update("coordinates", {
      render: (props: { onChange: () => void; value: any } & any) => {
        console.log("props.value");
        console.log(props.value);
        return (
          <Ant.Form.Item {...props}>
            <UpdateMarker onChange={props.onChange} value={props.value} />
          </Ant.Form.Item>
        );
      },
    });
  }

  static getRequestBody(): QueryBodyType<Doctor> {

    return super.getRequestBody();
  }
}
