import { Service } from "@bluelibs/core";
import { RotationCreateForm as BaseRotationCreateForm } from "./RotationCreateForm.base";
import { features } from "./features";
import {
  Rotation,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";
import { Routes } from "@bundles/UIAppBundle";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { RotationType } from "@root/api.types";

@Service({ transient: true })
export class RotationCreateForm extends BaseRotationCreateForm {
  build() {
    super.build();
    this.update("from", {
      initialValue: new Date(),
    });
    this.update("to", {
      initialValue: new Date(),
    });
    this.remove("isDone");
    this.remove("type");
    this.update("doctorsListIds", {
      render: (props) => (
        <Ant.Form.Item {...props}>
          <this.UIComponents.RemoteSelect
            collectionClass={DoctorsCollection}
            field="fullName"
            filterOption={(input, option) =>
              (option.children as unknown as string).includes(input)
            }
            required={true}
            mode="multiple"
          />
        </Ant.Form.Item>
      ),
    });
    // Perform additional modifications such as updating rendering functions, labels, description
  }
  onCustomSubmit(document: Partial<Rotation>): Promise<void> {
    const { t } = this.i18n;
    document.isDone = false;
    document.type = [RotationType.GLOBAL];
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
