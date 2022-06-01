/** @overridable */
import { IRoute, useUIComponents } from "@bluelibs/x-ui";
import * as React from "react";
import { RotationsList } from "../components/List/RotationsList";
import { RotationsCreate } from "../components/Create/RotationsCreate";
import { RotationsEdit } from "../components/Edit/RotationsEdit";
import { RotationsView } from "../components/View/RotationsView";

import { SettingFilled } from "@ant-design/icons";
function Not() {
  const UIComponents = useUIComponents();

  return <UIComponents.NotFound />;
}
console.log( process.env.API_MODE )
export const ROTATIONS_LIST: IRoute = {
  path: "/admin/rotations",
  component: process.env.MODE != "advanced" ?  Not  : RotationsList ,

  menu:
    process.env.MODE != "advanced"
      ? null
      : {
        key: "ROTATIONS_LIST",
        label: "management.rotations.menu.title",
        icon: SettingFilled,
      },
};

export const ROTATIONS_CREATE: IRoute = {
  path: "/admin/rotations/create",
  component: RotationsCreate,
};

export const ROTATIONS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/rotations/:id/edit",
  component: RotationsEdit,
};

export const ROTATIONS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/rotations/:id/view",
  component: RotationsView,
};
