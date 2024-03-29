/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Doctor,
  UsersCollection,
  RegionsCollection,
  DoctorsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DoctorListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "address",
        label: t("management.doctors.fields.address"),
        name: ["address"],
        columns: true,
        nest: [
          {
            id: "wilaya",
            label: t("management.doctors.fields.address.wilaya"),
            name: ["address", "wilaya"],
            component: Ant.Input,
          },

          {
            id: "daira",
            label: t("management.doctors.fields.address.daira"),
            name: ["address", "daira"],
            component: Ant.Input,
          },

          {
            id: "commune",
            label: t("management.doctors.fields.address.commune"),
            name: ["address", "commune"],
            component: Ant.Input,
          },
        ],
      },

      {
        id: "coordinates",
        label: t("management.doctors.fields.coordinates"),
        name: ["coordinates"],
        columns: true,
        nest: [
          {
            id: "lat",
            label: t("management.doctors.fields.coordinates.lat"),
            name: ["coordinates", "lat"],
            required: true,
            component: Ant.InputNumber,
          },

          {
            id: "lng",
            label: t("management.doctors.fields.coordinates.lng"),
            name: ["coordinates", "lng"],
            required: true,
            component: Ant.InputNumber,
          },
        ],
      },

      {
        id: "phone",
        label: t("management.doctors.fields.phone"),
        name: ["phone"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedAt",
        label: t("management.doctors.fields.updatedAt"),
        name: ["updatedAt"],
        tooltip: t("management.doctors.fields.updatedAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "createdAt",
        label: t("management.doctors.fields.createdAt"),
        name: ["createdAt"],
        tooltip: t("management.doctors.fields.createdAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "isEnabled",
        label: t("management.doctors.fields.isEnabled"),
        name: ["isEnabled"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Radio.Group>
              <Ant.Radio value={false} key={0}>
                No
              </Ant.Radio>
              <Ant.Radio value={true} key={1}>
                Yes
              </Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        ),
      },

      {
        id: "profile",
        label: t("management.doctors.fields.profile"),
        name: ["profile"],
        columns: true,
        nest: [
          {
            id: "firstName",
            label: t("management.doctors.fields.profile.firstName"),
            name: ["profile", "firstName"],
            required: true,
            component: Ant.Input,
          },

          {
            id: "lastName",
            label: t("management.doctors.fields.profile.lastName"),
            name: ["profile", "lastName"],
            required: true,
            component: Ant.Input,
          },
        ],
      },

      {
        id: "createdById",
        label: t("management.doctors.fields.createdBy"),
        name: ["createdById"],
        tooltip: t("management.doctors.fields.createdBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedById",
        label: t("management.doctors.fields.updatedBy"),
        name: ["updatedById"],
        tooltip: t("management.doctors.fields.updatedBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "regionId",
        label: t("management.doctors.fields.region"),
        name: ["regionId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={RegionsCollection}
              field="name"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
