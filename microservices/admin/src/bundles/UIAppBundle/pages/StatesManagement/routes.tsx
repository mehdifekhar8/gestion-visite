import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  STATES_LIST as BASE_STATES_LIST,
  STATES_CREATE as BASE_STATES_CREATE,
  STATES_EDIT as BASE_STATES_EDIT,
  STATES_VIEW as BASE_STATES_VIEW,
} from "./config/routes";
import { UserRole } from "@root/api.types";

export const STATES_LIST: IRoute = {
  ...BASE_STATES_LIST,
  roles: [UserRole.ADMIN],
};

export const STATES_CREATE: IRoute = {
  ...BASE_STATES_CREATE,
  roles: [UserRole.ADMIN],
};

export const STATES_EDIT: IRoute = {
  ...BASE_STATES_EDIT,
  roles: [UserRole.ADMIN],
};

export const STATES_VIEW: IRoute = {
  ...BASE_STATES_VIEW,
  roles: [UserRole.ADMIN],
};
