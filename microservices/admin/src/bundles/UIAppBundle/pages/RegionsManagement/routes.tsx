import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  REGIONS_LIST as BASE_REGIONS_LIST,
  REGIONS_CREATE as BASE_REGIONS_CREATE,
  REGIONS_EDIT as BASE_REGIONS_EDIT,
  REGIONS_VIEW as BASE_REGIONS_VIEW,
} from "./config/routes";
import { UserRole } from "@root/api.types";

export const REGIONS_LIST: IRoute = {
  ...BASE_REGIONS_LIST,
  roles: [UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR],
};

export const REGIONS_CREATE: IRoute = {
  ...BASE_REGIONS_CREATE,
  roles: [UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR],
};

export const REGIONS_EDIT: IRoute = {
  ...BASE_REGIONS_EDIT,
  roles: [UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR],
};

export const REGIONS_VIEW: IRoute = {
  ...BASE_REGIONS_VIEW,
  roles: [UserRole.ADMIN, UserRole.REGION_ADMINISTRATOR],
};
