/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  Region,
  UsersCollection,
  StatesCollection,
  RegionsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RegionCreateForm extends XForm {
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

      {
        id: "usersListIds",
        label: t("management.regions.fields.usersList"),
        name: ["usersListIds"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              required={true}
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  onSubmit(document: Partial<Region>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.regions.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.REGIONS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.REGIONS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.REGIONS_EDIT, {
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
