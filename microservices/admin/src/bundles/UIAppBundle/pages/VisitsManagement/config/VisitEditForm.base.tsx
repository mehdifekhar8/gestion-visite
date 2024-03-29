/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Visit,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
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
        id: "coordinates",
        label: t("management.visits.fields.coordinates"),
        name: ["coordinates"],
        required: true,
        nest: [
          {
            id: "lat",
            label: t("management.visits.fields.coordinates.lat"),
            name: ["coordinates", "lat"],
            required: true,
            component: Ant.InputNumber,
          },

          {
            id: "lng",
            label: t("management.visits.fields.coordinates.lng"),
            name: ["coordinates", "lng"],
            required: true,
            component: Ant.InputNumber,
          },
        ],
      },

      {
        id: "locationValidation",
        label: t("management.visits.fields.locationValidation"),
        name: ["locationValidation"],
        component: Ant.InputNumber,
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

      {
        id: "rotationId",
        label: t("management.visits.fields.rotation"),
        name: ["rotationId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={RotationsCollection}
              field="dateIntervale"
              required={false}
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
      coordinates: {
        lat: 1,
        lng: 1,
      },
      locationValidation: 1,
      doctor: {
        _id: 1,
        fullName: 1,
      },
      doctorId: 1,
      rotation: {
        _id: 1,
        dateIntervale: 1,
      },
      rotationId: 1,
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
