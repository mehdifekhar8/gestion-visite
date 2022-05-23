/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Rotation,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RotationListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        label: t("management.rotations.fields.createdAt"),
        name: ["createdAt"],
        tooltip: t("management.rotations.fields.createdAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedAt",
        label: t("management.rotations.fields.updatedAt"),
        name: ["updatedAt"],
        tooltip: t("management.rotations.fields.updatedAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "from",
        label: t("management.rotations.fields.from"),
        name: ["from"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "to",
        label: t("management.rotations.fields.to"),
        name: ["to"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "roles",
        label: t("management.rotations.fields.roles"),
        name: ["roles"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Select
              mode="multiple"
              placeholder={t("management.rotations.fields.roles")}
            >
              <Ant.Select.Option value="EACH_DAY" key="EACH_DAY">
                Each Day
              </Ant.Select.Option>
              <Ant.Select.Option value="GLOBAL" key="GLOBAL">
                Global
              </Ant.Select.Option>
            </Ant.Select>
          </Ant.Form.Item>
        ),
      },

      {
        id: "isDone",
        label: t("management.rotations.fields.isDone"),
        name: ["isDone"],
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
        id: "createdById",
        label: t("management.rotations.fields.createdBy"),
        name: ["createdById"],
        tooltip: t("management.rotations.fields.createdBy_description"),
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
        label: t("management.rotations.fields.updatedBy"),
        name: ["updatedById"],
        tooltip: t("management.rotations.fields.updatedBy_description"),
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
        id: "userId",
        label: t("management.rotations.fields.user"),
        name: ["userId"],
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
        id: "doctorsListIds",
        label: t("management.rotations.fields.doctorsList"),
        name: ["doctorsListIds"],
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
    ]);
  }
}
