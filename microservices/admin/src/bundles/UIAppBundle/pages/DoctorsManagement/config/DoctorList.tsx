import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Doctor } from "@bundles/UIAppBundle/collections";
import { Fragment } from "react";
import { DoctorList as BaseDoctorList } from "./DoctorList.base";

@Service({ transient: true })
export class DoctorList extends BaseDoctorList {
  build() {
    const { t } = this.i18n;

    super.build();
    this.remove("profile.lastName");
    this.remove("profile.firstName");
    this.remove("address.wilaya");
    this.remove("address.daira");
    this.remove("address.commune");
    this.remove("coordinates.lat");
    this.remove("coordinates.lng");
    this.remove("updatedAt");
    this.remove("isEnabled");
    this.remove("updatedBy");
    this.update("fullName", {
      order: 0,
    });
   

    let order = reorder(this.elements, 1, 0);
    this.elements = order;
    order = reorder(this.elements, 2, 4);
    this.elements = order;
    function reorder(arr, a, b) {
      const order = arr[a];
      arr[a] = arr[b];
      arr[b] = order;
      return arr;
    }
    this.add({
      id: "fullNameOne",
      title: t("management.doctors.fields.fullName"),
      key: "management.doctors.fields.fullName",
      dataIndex: ["fullName"],
      sorter: true,
      render: (record, modal) => {
        console.log(modal);
        return (
          <Fragment>
            {modal.fullName}aaa
            <br />
            {modal.phone}
            <br />
          </Fragment>
        );
      },

      responsive: ["xs"],
    });
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Doctor> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
