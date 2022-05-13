/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Region,
  UsersCollection,
  StatesCollection,
  RegionsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RegionEditForm extends XForm {
  @Inject(() => RegionsCollection)
  collection: RegionsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "name",
        label: t("management.regions.fields.name"),
        name: ["name"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "superVisorId",
        label: t("management.regions.fields.superVisor"),
        name: ["superVisorId"],
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
        id: "statesListIds",
        label: t("management.regions.fields.statesList"),
        name: ["statesListIds"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={StatesCollection}
              field="state"
              required={true}
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Region> {
    return {
      _id: 1,
      name: 1,
      superVisor: {
        _id: 1,
        fullName: 1,
      },
      superVisorId: 1,
      statesList: {
        _id: 1,
        state: 1,
      },
      statesListIds: 1,
    };
  }

  onSubmit(_id, values: Partial<Region>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.regions.edit_confirmation"),
          icon: <SmileOutlined />,
        });
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
