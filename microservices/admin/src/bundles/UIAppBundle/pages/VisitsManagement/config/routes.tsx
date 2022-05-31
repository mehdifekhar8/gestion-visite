/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { VisitsList } from "../components/List/VisitsList";
import { VisitsCreate } from "../components/Create/VisitsCreate";
import { VisitsEdit } from "../components/Edit/VisitsEdit";
import { VisitsView } from "../components/View/VisitsView";

import { SettingFilled } from "@ant-design/icons";

export const VISITS_LIST: IRoute = {
  path: "/admin/visits",
  component: VisitsList,
  menu: {
    key: "VISITS_LIST",
    label: "management.visits.menu.title",
    icon: SettingFilled,
  },
};

export const VISITS_CREATE: IRoute = {
  path: "/admin/visits/create",
  component: VisitsCreate,
};
export const VISITS_DOCTOR: IRoute<{ id: string,rotationId: string }> = {
  path: "/admin/visits/create/:id/:rotationId",
  component: VisitsCreate,
};

export const VISITS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/visits/:id/edit",
  component: VisitsEdit,
};

export const VISITS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/visits/:id/view",
  component: VisitsView,
};
