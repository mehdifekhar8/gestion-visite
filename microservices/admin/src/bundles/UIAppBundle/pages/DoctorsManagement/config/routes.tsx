/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { DoctorsList } from "../components/List/DoctorsList";
import { DoctorsCreate } from "../components/Create/DoctorsCreate";
import { DoctorsEdit } from "../components/Edit/DoctorsEdit";
import { DoctorsView } from "../components/View/DoctorsView";

import { SettingFilled } from "@ant-design/icons";

export const DOCTORS_LIST: IRoute = {
  path: "/admin/doctors",
  component: DoctorsList,
  menu: {
    key: "DOCTORS_LIST",
    label: "management.doctors.menu.title",
    icon: SettingFilled,
  },
};

export const DOCTORS_CREATE: IRoute = {
  path: "/admin/doctors/create",
  component: DoctorsCreate,
};

export const DOCTORS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/doctors/:id/edit",
  component: DoctorsEdit,
};

export const DOCTORS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/doctors/:id/view",
  component: DoctorsView,
};
