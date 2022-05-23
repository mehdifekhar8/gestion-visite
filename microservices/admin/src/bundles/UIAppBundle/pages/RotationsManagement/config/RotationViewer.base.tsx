/** @overridable */
import { Rotation } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class RotationViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.rotations.fields._id"),
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
        label: t("management.rotations.fields.createdAt"),
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
        label: t("management.rotations.fields.updatedAt"),
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
        id: "from",
        label: t("management.rotations.fields.from"),
        dataIndex: ["from"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "to",
        label: t("management.rotations.fields.to"),
        dataIndex: ["to"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "roles",
        label: t("management.rotations.fields.roles"),
        dataIndex: ["roles"],
        render: (value) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "enum",
                    value,
                    labelify: true,
                  };
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
      {
        id: "isDone",
        label: t("management.rotations.fields.isDone"),
        dataIndex: ["isDone"],
        render: (value) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdBy",
        label: t("management.rotations.fields.createdBy"),
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
        label: t("management.rotations.fields.updatedBy"),
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
        id: "user",
        label: t("management.rotations.fields.user"),
        dataIndex: ["user"],
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
        id: "doctorsList",
        label: t("management.rotations.fields.doctorsList"),
        dataIndex: ["doctorsList"],
        render: (value) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
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
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Rotation> {
    return {
      _id: 1,
      createdAt: 1,
      updatedAt: 1,
      from: 1,
      to: 1,
      roles: 1,
      isDone: 1,
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
      user: {
        _id: 1,
        fullName: 1,
      },
      userId: 1,
      doctorsList: {
        _id: 1,
        fullName: 1,
      },
      doctorsListIds: 1,
    };
  }
}
