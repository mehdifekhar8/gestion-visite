/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { RegionsList } from "../components/List/RegionsList";
import { RegionsCreate } from "../components/Create/RegionsCreate";
import { RegionsEdit } from "../components/Edit/RegionsEdit";
import { RegionsView } from "../components/View/RegionsView";

import { SettingFilled } from "@ant-design/icons";

export const REGIONS_LIST: IRoute = {
  path: "/admin/regions",
  component: RegionsList,
  menu: {
    key: "REGIONS_LIST",
    label: "management.regions.menu.title",
    icon: SettingFilled,
  },
};

export const REGIONS_CREATE: IRoute = {
  path: "/admin/regions/create",
  component: RegionsCreate,
};

export const REGIONS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/regions/:id/edit",
  component: RegionsEdit,
};

export const REGIONS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/regions/:id/view",
  component: RegionsView,
};
