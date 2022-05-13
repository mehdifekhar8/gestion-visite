/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { StatesList } from "../components/List/StatesList";
import { StatesCreate } from "../components/Create/StatesCreate";
import { StatesEdit } from "../components/Edit/StatesEdit";
import { StatesView } from "../components/View/StatesView";

import { SettingFilled } from "@ant-design/icons";

export const STATES_LIST: IRoute = {
  path: "/admin/states",
  component: StatesList,
  menu: {
    key: "STATES_LIST",
    label: "management.states.menu.title",
    icon: SettingFilled,
  },
};

export const STATES_CREATE: IRoute = {
  path: "/admin/states/create",
  component: StatesCreate,
};

export const STATES_EDIT: IRoute<{ id: string }> = {
  path: "/admin/states/:id/edit",
  component: StatesEdit,
};

export const STATES_VIEW: IRoute<{ id: string }> = {
  path: "/admin/states/:id/view",
  component: StatesView,
};
