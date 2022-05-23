/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Rotation,
  UsersCollection,
  DoctorsCollection,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RotationList extends XList<Rotation> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        title: t("management.rotations.fields.createdAt"),
        key: "management.rotations.fields.createdAt",
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
        title: t("management.rotations.fields.updatedAt"),
        key: "management.rotations.fields.updatedAt",
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
        id: "from",
        title: t("management.rotations.fields.from"),
        key: "management.rotations.fields.from",
        dataIndex: ["from"],
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
        id: "to",
        title: t("management.rotations.fields.to"),
        key: "management.rotations.fields.to",
        dataIndex: ["to"],
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
        id: "roles",
        title: t("management.rotations.fields.roles"),
        key: "management.rotations.fields.roles",
        dataIndex: ["roles"],
        sorter: true,
        render: (value, model) => {
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
        title: t("management.rotations.fields.isDone"),
        key: "management.rotations.fields.isDone",
        dataIndex: ["isDone"],
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
        id: "createdBy",
        title: t("management.rotations.fields.createdBy"),
        key: "management.rotations.fields.createdBy",
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
        title: t("management.rotations.fields.updatedBy"),
        key: "management.rotations.fields.updatedBy",
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
        id: "user",
        title: t("management.rotations.fields.user"),
        key: "management.rotations.fields.user",
        dataIndex: ["user"],
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
        id: "doctorsList",
        title: t("management.rotations.fields.doctorsList"),
        key: "management.rotations.fields.doctorsList",
        dataIndex: ["doctorsList"],
        sorter: true,
        render: (value, model) => {
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

  static getSortMap() {
    return {
      createdBy: "createdBy.fullName",
      updatedBy: "updatedBy.fullName",
      user: "user.fullName",
      doctorsList: "doctorsList.fullName",
    };
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
