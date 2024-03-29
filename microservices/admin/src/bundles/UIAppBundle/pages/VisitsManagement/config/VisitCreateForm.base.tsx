/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  Visit,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
  VisitsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class VisitCreateForm extends XForm {
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

  onSubmit(document: Partial<Visit>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.visits.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.VISITS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.VISITS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.VISITS_EDIT, {
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
