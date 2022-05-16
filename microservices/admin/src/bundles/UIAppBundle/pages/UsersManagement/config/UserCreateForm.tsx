import { Service } from "@bluelibs/core";
import { UserCreateForm as BaseUserCreateForm } from "./UserCreateForm.base";
import * as Ant from "antd";
import { User } from "@bundles/UIAppBundle/collections";
import { SmileOutlined } from "@ant-design/icons";
import { features } from "./features";
import { Routes } from "@bundles/UIAppBundle";
import { UserRegistration } from "../mutations/UserRegistration";
import { useMutation } from "@apollo/client";
import { useGuardian, useTranslate } from "@bluelibs/x-ui";
import { Fragment } from "react";

@Service({ transient: true })
export class UserCreateForm extends BaseUserCreateForm {
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
    this.update("roles", {
      render: (props) => {
        const guardian = useGuardian();

        return (
          <Ant.Form.Item {...props}>
            <Ant.Select
              mode="multiple"
              placeholder={t("management.users.fields.roles")}
            >
              {guardian.hasRole("ADMIN") && (
                <Fragment>
                  <Ant.Select.Option value="ADMIN" key="ADMIN">
                    Admin
                  </Ant.Select.Option>
                  <Ant.Select.Option
                    value="REGION_ADMINISTRATOR"
                    key="REGION_ADMINISTRATOR"
                  >
                    Region Administrator
                  </Ant.Select.Option>
                </Fragment>
              )}
              <Ant.Select.Option value="DELEGATE" key="DELEGATE">
                Delegate
              </Ant.Select.Option>
            </Ant.Select>
          </Ant.Form.Item>
        );
      },
    });
    this.remove("isEnabled");

    // Perform additional modifications such as updating rendering functions, labels, description
    
  }

}
