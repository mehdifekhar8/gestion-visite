import { Service } from "@bluelibs/core";
import { UserCreateForm as BaseUserCreateForm } from "./UserCreateForm.base";
import * as Ant from "antd";
import { User } from "@bundles/UIAppBundle/collections";
import { SmileOutlined } from "@ant-design/icons";
import { features } from "./features";
import { Routes } from "@bundles/UIAppBundle";



@Service({ transient: true })
export class UserCreateForm extends BaseUserCreateForm {
  static i18n: { t: any };
  build() {
    const { t } = this.i18n;

    super.build();
    this.add([
      {
        id: "email",
        label: t("management.users.fields.email"),
        name: ["email"],
        required: true,
        component: Ant.Input,
      },
      {
        id: "password",
        label: t("management.users.fields.password"),
        name: ["password"],
        required: true,
        component: Ant.Input,
      },
    ]);
    this.remove("isEnabled")

    // Perform additional modifications such as updating rendering functions, labels, description
  }
  

  // static onSubmit(document: Partial<User>): Promise<void> {
  //   const { t } = this.i18n;

  //   return this.collection
  //     .insertOne(document)
  //     .then(({ _id }) => {
  //       Ant.notification.success({
  //         message: t("generics.success"),
  //         description: t("management.users.create_confirmation"),
  //         icon: <SmileOutlined />,
  //       });

  //       if (features.view) {
  //         return this.router.go(Routes.USERS_VIEW, {
  //           params: {
  //             id: _id,
  //           },
  //         });
  //       }
  //       if (features.list) {
  //         return this.router.go(Routes.USERS_LIST);
  //       }
  //       if (features.edit) {
  //         return this.router.go(Routes.USERS_EDIT, {
  //           params: {
  //             id: _id,
  //           },
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       Ant.notification.warn({
  //         message: t("generics.error"),
  //         description: t("generics.error_message"),
  //       });
  //     });
  // }
}
