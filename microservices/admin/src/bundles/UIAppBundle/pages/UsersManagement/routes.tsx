import { IRoute } from "@bluelibs/x-ui";
import "./i18n";
import { UserRole } from "@root/api.types";

import {
  USERS_LIST as BASE_USERS_LIST,
  USERS_CREATE as BASE_USERS_CREATE,
  USERS_EDIT as BASE_USERS_EDIT,
  USERS_VIEW as BASE_USERS_VIEW,
} from "./config/routes";

export const USERS_LIST: IRoute = {
  ...BASE_USERS_LIST,
  roles: [UserRole.ADMIN,UserRole.REGION_ADMINISTRATOR],
};

export const USERS_CREATE: IRoute = {
  ...BASE_USERS_CREATE,
  roles: [UserRole.ADMIN,UserRole.REGION_ADMINISTRATOR],
};

export const USERS_EDIT: IRoute = {
  ...BASE_USERS_EDIT,
  roles: [UserRole.ADMIN,UserRole.REGION_ADMINISTRATOR],
};

export const USERS_VIEW: IRoute = {
  ...BASE_USERS_VIEW,
  roles: [UserRole.ADMIN,UserRole.REGION_ADMINISTRATOR],
};
