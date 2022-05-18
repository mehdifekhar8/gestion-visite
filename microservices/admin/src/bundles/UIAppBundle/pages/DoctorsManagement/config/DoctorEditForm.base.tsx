/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Doctor,
  UsersCollection,
  RegionsCollection,
  DoctorsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DoctorEditForm extends XForm {
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
            component: Ant.InputNumber,
          },

          {
            id: "lng",
            label: t("management.doctors.fields.coordinates.lng"),
            name: ["coordinates", "lng"],
            required: true,
            component: Ant.InputNumber,
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
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={RegionsCollection}
              field="name"
              required={false}
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Doctor> {
    return {
      _id: 1,
      coordinates: {
        lat: 1,
        lng: 1,
      },
      phone: 1,
      isEnabled: 1,
      profile: {
        firstName: 1,
        lastName: 1,
      },
      region: {
        _id: 1,
        name: 1,
      },
      regionId: 1,
    };
  }

  onSubmit(_id, values: Partial<Doctor>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.doctors.edit_confirmation"),
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
