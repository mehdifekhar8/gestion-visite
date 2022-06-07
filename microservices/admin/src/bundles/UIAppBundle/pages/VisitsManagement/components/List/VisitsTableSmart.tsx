import React, { Fragment } from "react";
import { Visit, VisitsCollection } from "@bundles/UIAppBundle/collections";
import { Routes } from "@bundles/UIAppBundle";
import { ColumnsType, ColumnType } from "antd/lib/table";
import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { AntTableSmart, Consumer } from "@bluelibs/x-ui-admin";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Service } from "@bluelibs/core";
import * as Ant from "antd";
import { features } from "../../config/features";
import { VisitList } from "../../config/VisitList";
import useWindowDimensions from "@bundles/UIAppBundle/components/ViewPort/ViewPort";

export class VisitsAntTableSmart extends AntTableSmart<Visit> {
  collectionClass = VisitsCollection;

  getBody(): QueryBodyType<Visit> {
    return VisitList.getRequestBody();
  }

  getColumns(): ColumnsType<Visit> {
    const list = this.container.get(VisitList);
    list.build();

    return [...list.rest(), this.getActionsColumn()];
  }

  getActionsColumn(): ColumnType<Visit> {
    const { height, width } = useWindowDimensions();
    return {
      title: this.i18n.t("generics.list_actions"),
      key: "actions",
      fixed:  width > 900 ? "right" : false,
      width: 100,
      render: (_, model) => {
        return this.generateActions(model, {
          label: this.i18n.t("generics.list_actions"),
          icon: <DownOutlined />,
          items: this.getActionItems(),
        });
      },
    };
  }

  getSortMap() {
    return VisitList.getSortMap();
  }

  getActionItems() {
    const actions = [];

    if (features.view) {
      actions.push({
        label: this.i18n.t("generics.view"),
        icon: <EyeOutlined />,
        action: (model) => {
          this.router.go(Routes.VISITS_VIEW, {
            params: { id: model._id.toString() },
          });
        },
      });
    }

    if (features.edit) {
      actions.push({
        label: this.i18n.t("generics.edit"),
        icon: <EditOutlined />,
        action: (model) => {
          this.router.go(Routes.VISITS_EDIT, {
            params: { id: model._id.toString() },
          });
        },
      });
    }

    if (features.delete) {
      actions.push({
        label: this.i18n.t("generics.delete"),
        icon: <DeleteOutlined />,
        confirm: this.i18n.t("generics.ask_confirmation"),
        action: (model) => {
          this.collection.deleteOne(model._id).then(() => {
            this.load();
          });
        },
      });
    }

    return actions;
  }
}
