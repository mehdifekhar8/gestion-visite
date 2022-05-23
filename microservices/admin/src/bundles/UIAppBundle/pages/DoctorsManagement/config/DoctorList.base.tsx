/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Doctor,
  UsersCollection,
  RegionsCollection,
  DoctorsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DoctorList extends XList<Doctor> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "address.wilaya",
        title: t("management.doctors.fields.address.wilaya"),
        key: "management.doctors.fields.address.wilaya",
        dataIndex: ["address", "wilaya"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "address.daira",
        title: t("management.doctors.fields.address.daira"),
        key: "management.doctors.fields.address.daira",
        dataIndex: ["address", "daira"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "address.commune",
        title: t("management.doctors.fields.address.commune"),
        key: "management.doctors.fields.address.commune",
        dataIndex: ["address", "commune"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "coordinates.lat",
        title: t("management.doctors.fields.coordinates.lat"),
        key: "management.doctors.fields.coordinates.lat",
        dataIndex: ["coordinates", "lat"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "coordinates.lng",
        title: t("management.doctors.fields.coordinates.lng"),
        key: "management.doctors.fields.coordinates.lng",
        dataIndex: ["coordinates", "lng"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "phone",
        title: t("management.doctors.fields.phone"),
        key: "management.doctors.fields.phone",
        dataIndex: ["phone"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "fullName",
        title: t("management.doctors.fields.fullName"),
        key: "management.doctors.fields.fullName",
        dataIndex: ["fullName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedAt",
        title: t("management.doctors.fields.updatedAt"),
        key: "management.doctors.fields.updatedAt",
        dataIndex: ["updatedAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdAt",
        title: t("management.doctors.fields.createdAt"),
        key: "management.doctors.fields.createdAt",
        dataIndex: ["createdAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "isEnabled",
        title: t("management.doctors.fields.isEnabled"),
        key: "management.doctors.fields.isEnabled",
        dataIndex: ["isEnabled"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "profile.firstName",
        title: t("management.doctors.fields.profile.firstName"),
        key: "management.doctors.fields.profile.firstName",
        dataIndex: ["profile", "firstName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "profile.lastName",
        title: t("management.doctors.fields.profile.lastName"),
        key: "management.doctors.fields.profile.lastName",
        dataIndex: ["profile", "lastName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdBy",
        title: t("management.doctors.fields.createdBy"),
        key: "management.doctors.fields.createdBy",
        dataIndex: ["createdBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedBy",
        title: t("management.doctors.fields.updatedBy"),
        key: "management.doctors.fields.updatedBy",
        dataIndex: ["updatedBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "region",
        title: t("management.doctors.fields.region"),
        key: "management.doctors.fields.region",
        dataIndex: ["region"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.REGIONS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "name",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {
      createdBy: "createdBy.fullName",
      updatedBy: "updatedBy.fullName",
      region: "region.name",
    };
  }

  static getRequestBody(): QueryBodyType<Doctor> {
    return {
      _id: 1,
      address: {
        wilaya: 1,
        daira: 1,
        commune: 1,
      },
      coordinates: {
        lat: 1,
        lng: 1,
      },
      phone: 1,
      fullName: 1,
      updatedAt: 1,
      createdAt: 1,
      isEnabled: 1,
      profile: {
        firstName: 1,
        lastName: 1,
      },
      createdBy: {
        _id: 1,
        fullName: 1,
      },
      createdById: 1,
      updatedBy: {
        _id: 1,
        fullName: 1,
      },
      updatedById: 1,
      region: {
        _id: 1,
        name: 1,
      },
      regionId: 1,
    };
  }
}
