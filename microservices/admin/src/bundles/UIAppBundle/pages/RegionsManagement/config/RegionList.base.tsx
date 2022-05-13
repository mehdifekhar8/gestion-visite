/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Region,
  UsersCollection,
  StatesCollection,
  RegionsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class RegionList extends XList<Region> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        title: t("management.regions.fields.createdAt"),
        key: "management.regions.fields.createdAt",
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
        title: t("management.regions.fields.updatedAt"),
        key: "management.regions.fields.updatedAt",
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
        id: "name",
        title: t("management.regions.fields.name"),
        key: "management.regions.fields.name",
        dataIndex: ["name"],
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
        id: "superVisor",
        title: t("management.regions.fields.superVisor"),
        key: "management.regions.fields.superVisor",
        dataIndex: ["superVisor"],
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
        id: "statesList",
        title: t("management.regions.fields.statesList"),
        key: "management.regions.fields.statesList",
        dataIndex: ["statesList"],
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
                      path: router.path(Routes.STATES_VIEW, {
                        params: {
                          id: value?._id,
                        },
                      }),
                      dataIndex: "state",
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
      superVisor: "superVisor.fullName",
      statesList: "statesList.state",
    };
  }

  static getRequestBody(): QueryBodyType<Region> {
    return {
      _id: 1,
      createdAt: 1,
      updatedAt: 1,
      name: 1,
      superVisor: {
        _id: 1,
        fullName: 1,
      },
      superVisorId: 1,
      statesList: {
        _id: 1,
        state: 1,
      },
      statesListIds: 1,
    };
  }
}
