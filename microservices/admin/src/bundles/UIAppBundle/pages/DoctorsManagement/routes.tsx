import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  DOCTORS_LIST as BASE_DOCTORS_LIST,
  DOCTORS_CREATE as BASE_DOCTORS_CREATE,
  DOCTORS_EDIT as BASE_DOCTORS_EDIT,
  DOCTORS_VIEW as BASE_DOCTORS_VIEW,
} from "./config/routes";
import { UserRole } from "@root/api.types";

export const DOCTORS_LIST: IRoute = {
  ...BASE_DOCTORS_LIST,
};

export const DOCTORS_CREATE: IRoute = {
  ...BASE_DOCTORS_CREATE,
};

export const DOCTORS_EDIT: IRoute = {
  ...BASE_DOCTORS_EDIT,
};

export const DOCTORS_VIEW: IRoute = {
  ...BASE_DOCTORS_VIEW,
};
