/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { State, StatesCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StateList extends XList<State> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "state",
        title: t("management.states.fields.state"),
        key: "management.states.fields.state",
        dataIndex: ["state"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {};
  }

  static getRequestBody(): QueryBodyType<State> {
    return {
      _id: 1,
      state: 1,
    };
  }
}
