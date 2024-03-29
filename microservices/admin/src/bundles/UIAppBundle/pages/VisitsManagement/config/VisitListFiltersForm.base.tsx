/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Visit,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
  VisitsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class VisitListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        label: t("management.visits.fields.createdAt"),
        name: ["createdAt"],
        tooltip: t("management.visits.fields.createdAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedAt",
        label: t("management.visits.fields.updatedAt"),
        name: ["updatedAt"],
        tooltip: t("management.visits.fields.updatedAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "information",
        label: t("management.visits.fields.information"),
        name: ["information"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "information2",
        label: t("management.visits.fields.information2"),
        name: ["information2"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "coordinates",
        label: t("management.visits.fields.coordinates"),
        name: ["coordinates"],
        columns: true,
        nest: [
          {
            id: "lat",
            label: t("management.visits.fields.coordinates.lat"),
            name: ["coordinates", "lat"],
            required: true,
            component: Ant.InputNumber,
          },

          {
            id: "lng",
            label: t("management.visits.fields.coordinates.lng"),
            name: ["coordinates", "lng"],
            required: true,
            component: Ant.InputNumber,
          },
        ],
      },

      {
        id: "locationValidation",
        label: t("management.visits.fields.locationValidation"),
        name: ["locationValidation"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Slider range step={10} min={0} max={100000} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "createdById",
        label: t("management.visits.fields.createdBy"),
        name: ["createdById"],
        tooltip: t("management.visits.fields.createdBy_description"),
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
        label: t("management.visits.fields.updatedBy"),
        name: ["updatedById"],
        tooltip: t("management.visits.fields.updatedBy_description"),
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
        id: "doctorId",
        label: t("management.visits.fields.doctor"),
        name: ["doctorId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={DoctorsCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "rotationId",
        label: t("management.visits.fields.rotation"),
        name: ["rotationId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={RotationsCollection}
              field="dateIntervale"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
