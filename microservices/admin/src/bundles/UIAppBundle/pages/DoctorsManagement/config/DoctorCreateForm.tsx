import { Service } from "@bluelibs/core";
import { useGuardian } from "@bluelibs/x-ui-guardian-bundle";
import { DoctorCreateForm as BaseDoctorCreateForm } from "./DoctorCreateForm.base";
import * as Ant from "antd";
import { AddMarker } from "@bundles/UIAppBundle/components/Map/AddMarker";
import { Address, Doctor } from "@root/api.types";
import { SmileOutlined } from "@ant-design/icons";
import { features } from "./features";
import { Routes } from "@bundles/UIAppBundle";
import Geocode from "react-geocode";

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

    this.remove("address");
    this.update("coordinates", {
      render: (props: { onChange: () => void; value: string } & any) => (
        <Ant.Form.Item name="body" {...props}>
          <AddMarker onChange={props.onChange}></AddMarker>
        </Ant.Form.Item>
      ),
    });

    // Perform additional modifications such as updating rendering functions, labels, description
  }
  onSubmitCustom(document: Partial<Doctor>): Promise<void> {
    const { t } = this.i18n;
    console.log(document);
   // getAddressFromCords();
   Geocode.setApiKey("AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ");
   Geocode.setLanguage("fr");
  return  Geocode.fromLatLng(
     document.coordinates.lat,
     document.coordinates.lng
   ).then(
     (response) => {
       const address = response.results[0]["address_components"];
       document.address = {
         wilaya: address[address.length - 2].long_name,
         daira: address[address.length - 3].long_name,
         commune: address[address.length - 4].long_name,
       };
       this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.doctors.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.DOCTORS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.DOCTORS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.DOCTORS_EDIT, {
            params: {
              id: _id,
            },
          });
        }
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
  

    function getAddressFromCords() {
      Geocode.setApiKey("AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ");
      Geocode.setLanguage("fr");
      Geocode.fromLatLng(
        document.coordinates.lat,
        document.coordinates.lng
      ).then(
        (response) => {
          const address = response.results[0]["address_components"];
          document.address = {
            wilaya: address[address.length - 2].long_name,
            daira: address[address.length - 3].long_name,
            commune: address[address.length - 4].long_name,
          };
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
