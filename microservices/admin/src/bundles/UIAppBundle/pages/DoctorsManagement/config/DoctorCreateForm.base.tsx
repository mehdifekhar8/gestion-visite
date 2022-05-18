/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  Doctor,
  UsersCollection,
  RegionsCollection,
  DoctorsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DoctorCreateForm extends XForm {
  @Inject(() => DoctorsCollection)
  collection: DoctorsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "coordinates",
        label: t("management.doctors.fields.coordinates"),
        name: ["coordinates"],
        required: true,
        nest: [
          {
            id: "lat",
            label: t("management.doctors.fields.coordinates.lat"),
            name: ["coordinates", "lat"],
            required: true,
            component: Ant.Input,
          },

          {
            id: "lng",
            label: t("management.doctors.fields.coordinates.lng"),
            name: ["coordinates", "lng"],
            required: true,
            component: Ant.Input,
          },
        ],
      },

      {
        id: "phone",
        label: t("management.doctors.fields.phone"),
        name: ["phone"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "isEnabled",
        label: t("management.doctors.fields.isEnabled"),
        name: ["isEnabled"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Radio.Group>
              <Ant.Radio value={false} key={0}>
                No
              </Ant.Radio>
              <Ant.Radio value={true} key={1}>
                Yes
              </Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        ),
      },

      {
        id: "profile",
        label: t("management.doctors.fields.profile"),
        name: ["profile"],
        required: true,
        nest: [
          {
            id: "firstName",
            label: t("management.doctors.fields.profile.firstName"),
            name: ["profile", "firstName"],
            required: true,
            component: Ant.Input,
          },

          {
            id: "lastName",
            label: t("management.doctors.fields.profile.lastName"),
            name: ["profile", "lastName"],
            required: true,
            component: Ant.Input,
          },
        ],
      },

      {
        id: "regionId",
        label: t("management.doctors.fields.region"),
        name: ["regionId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={RegionsCollection}
              field="name"
              required={true}
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  onSubmit(document: Partial<Doctor>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.doctors.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.DOCTORS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.DOCTORS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.DOCTORS_EDIT, {
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
