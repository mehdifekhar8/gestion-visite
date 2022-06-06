import { Service } from "@bluelibs/core";
import { DoctorEditForm as BaseDoctorEditForm } from "./DoctorEditForm.base";
import { QueryBodyType, useGuardian } from "@bluelibs/x-ui";
import { Doctor } from "@bundles/UIAppBundle/collections";
import * as Ant from "antd";
import { UpdateMarker } from "@bundles/UIAppBundle/components/Map/UpdateMarker";
import { SmileOutlined } from "@ant-design/icons";
import Geocode from "react-geocode";

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
    this.remove("address")
    this.update("coordinates", {
      render: (props: { onChange: () => void; value: any } & any) => {
        return (
          <Ant.Form.Item {...props}>
            <UpdateMarker onChange={props.onChange} value={props.value} />
          </Ant.Form.Item>
        );
      },
    });
  }
  onSubmitCustom(_id, values: Partial<Doctor>): Promise<void> {
    const { t } = this.i18n;
    Geocode.setApiKey("AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ");
    Geocode.setLanguage("fr");

    return Geocode.fromLatLng(
      values.coordinates.lat,
      values.coordinates.lng
    ).then(
      (response) => {
        const address = response.results[0]["address_components"];
        values.address = {
          wilaya: address[address.length - 2].long_name,
          daira: address[address.length - 3].long_name,
          commune: address[address.length - 4].long_name,
        };
        console.log(values)
        this.collection
          .updateOne(_id, { $set: values })
          .then(({ _id }) => {
            Ant.notification.success({
              message: t("generics.success"),
              description: t("management.doctors.edit_confirmation"),
              icon: <SmileOutlined />,
            });
          })
          .catch((err) => {
            Ant.notification.warn({
              message: t("generics.error"),
              description: t("generics.error_message"),
            });
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  static getRequestBody(): QueryBodyType<Doctor> {
    return super.getRequestBody();
  }
}
