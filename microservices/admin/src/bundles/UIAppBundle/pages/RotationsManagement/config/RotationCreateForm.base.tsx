/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  Rotation,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RotationCreateForm extends XForm {
  @Inject(() => RotationsCollection)
  collection: RotationsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "from",
        label: t("management.rotations.fields.from"),
        name: ["from"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.DatePicker required={true} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "to",
        label: t("management.rotations.fields.to"),
        name: ["to"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.DatePicker required={true} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "roles",
        label: t("management.rotations.fields.roles"),
        name: ["roles"],
        required: true,
        initialValue: [],
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
        required: true,
        initialValue: false,
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
        id: "userId",
        label: t("management.rotations.fields.user"),
        name: ["userId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              required={true}
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "doctorsListIds",
        label: t("management.rotations.fields.doctorsList"),
        name: ["doctorsListIds"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={DoctorsCollection}
              field="fullName"
              required={true}
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  onSubmit(document: Partial<Rotation>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.rotations.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.ROTATIONS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.ROTATIONS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.ROTATIONS_EDIT, {
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
  }
}
