import React, { Fragment } from "react";
import {
  Rotation,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";
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
import { RotationList } from "../../config/RotationList";

export class RotationsAntTableSmart extends AntTableSmart<Rotation> {
  collectionClass = RotationsCollection;

  getBody(): QueryBodyType<Rotation> {
    return RotationList.getRequestBody();
  }

  getColumns(): ColumnsType<Rotation> {
    const list = this.container.get(RotationList);
    list.build();

    return [...list.rest(), this.getActionsColumn()];
  }

  getActionsColumn(): ColumnType<Rotation> {
    return {
      title: this.i18n.t("generics.list_actions"),
      key: "actions",
      fixed: "right",
      width: 180,
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
    return RotationList.getSortMap();
  }

  getActionItems() {
    const actions = [];

    if (features.view) {
      actions.push({
        label: this.i18n.t("generics.view"),
        icon: <EyeOutlined />,
        action: (model) => {
          this.router.go(Routes.ROTATIONS_VIEW, {
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
          this.router.go(Routes.ROTATIONS_EDIT, {
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
