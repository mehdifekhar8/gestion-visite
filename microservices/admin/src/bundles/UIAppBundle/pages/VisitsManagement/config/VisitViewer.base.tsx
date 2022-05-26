/** @overridable */
import { Visit } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class VisitViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.visits.fields._id"),
        dataIndex: ["_id"],
        render: (value) => {
          const props = {
            type: "objectId",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdAt",
        label: t("management.visits.fields.createdAt"),
        dataIndex: ["createdAt"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedAt",
        label: t("management.visits.fields.updatedAt"),
        dataIndex: ["updatedAt"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "information",
        label: t("management.visits.fields.information"),
        dataIndex: ["information"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "information2",
        label: t("management.visits.fields.information2"),
        dataIndex: ["information2"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "coordinates.lat",
        label: t("management.visits.fields.coordinates.lat"),
        dataIndex: ["coordinates", "lat"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "coordinates.lng",
        label: t("management.visits.fields.coordinates.lng"),
        dataIndex: ["coordinates", "lng"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "locationValidation",
        label: t("management.visits.fields.locationValidation"),
        dataIndex: ["locationValidation"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdBy",
        label: t("management.visits.fields.createdBy"),
        dataIndex: ["createdBy"],
        render: (value) => {
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
        label: t("management.visits.fields.updatedBy"),
        dataIndex: ["updatedBy"],
        render: (value) => {
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
        label: t("management.visits.fields.doctor"),
        dataIndex: ["doctor"],
        render: (value) => {
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
        label: t("management.visits.fields.rotation"),
        dataIndex: ["rotation"],
        render: (value) => {
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
