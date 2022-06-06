/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Visit,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
  VisitsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class VisitList extends XList<Visit> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        title: t("management.visits.fields.createdAt"),
        key: "management.visits.fields.createdAt",
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
        id: "updatedAt",
        title: t("management.visits.fields.updatedAt"),
        key: "management.visits.fields.updatedAt",
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
        id: "information",
        title: t("management.visits.fields.information"),
        key: "management.visits.fields.information",
        dataIndex: ["information"],
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
        id: "information2",
        title: t("management.visits.fields.information2"),
        key: "management.visits.fields.information2",
        dataIndex: ["information2"],
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
        title: t("management.visits.fields.coordinates.lat"),
        key: "management.visits.fields.coordinates.lat",
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
        title: t("management.visits.fields.coordinates.lng"),
        key: "management.visits.fields.coordinates.lng",
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
        id: "locationValidation",
        title: t("management.visits.fields.locationValidation"),
        key: "management.visits.fields.locationValidation",
        dataIndex: ["locationValidation"],
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
        id: "createdBy",
        title: t("management.visits.fields.createdBy"),
        key: "management.visits.fields.createdBy",
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
        title: t("management.visits.fields.updatedBy"),
        key: "management.visits.fields.updatedBy",
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
        id: "doctor",
        title: t("management.visits.fields.doctor"),
        key: "management.visits.fields.doctor",
        dataIndex: ["doctor"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.DOCTORS_VIEW, {
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
        id: "rotation",
        title: t("management.visits.fields.rotation"),
        key: "management.visits.fields.rotation",
        dataIndex: ["rotation"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.ROTATIONS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "dateIntervale",
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
      doctor: "doctor.fullName",
      rotation: "rotation.dateIntervale",
    };
  }

  static getRequestBody(): QueryBodyType<Visit> {
    return {
      _id: 1,
      createdAt: 1,
      updatedAt: 1,
      information: 1,
      information2: 1,
      coordinates: {
        lat: 1,
        lng: 1,
      },
      locationValidation: 1,
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
}
