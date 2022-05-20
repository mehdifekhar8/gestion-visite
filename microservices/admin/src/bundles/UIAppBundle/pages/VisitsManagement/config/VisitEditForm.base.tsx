/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Visit,
  DoctorsCollection,
  VisitsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class VisitEditForm extends XForm {
  @Inject(() => VisitsCollection)
  collection: VisitsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "information",
        label: t("management.visits.fields.information"),
        name: ["information"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "information2",
        label: t("management.visits.fields.information2"),
        name: ["information2"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "doctorId",
        label: t("management.visits.fields.doctor"),
        name: ["doctorId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={DoctorsCollection}
              field="fullName"
              required={true}
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Visit> {
    return {
      _id: 1,
      information: 1,
      information2: 1,
      doctor: {
        _id: 1,
        fullName: 1,
      },
      doctorId: 1,
    };
  }

  onSubmit(_id, values: Partial<Visit>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.visits.edit_confirmation"),
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
