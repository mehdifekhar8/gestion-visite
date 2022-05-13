/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import { State, StatesCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StateEditForm extends XForm {
  @Inject(() => StatesCollection)
  collection: StatesCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "state",
        label: t("management.states.fields.state"),
        name: ["state"],
        required: true,
        component: Ant.Input,
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<State> {
    return {
      _id: 1,
      state: 1,
    };
  }

  onSubmit(_id, values: Partial<State>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.states.edit_confirmation"),
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
