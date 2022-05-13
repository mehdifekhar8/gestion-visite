import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  VISITS_LIST as BASE_VISITS_LIST,
  VISITS_CREATE as BASE_VISITS_CREATE,
  VISITS_EDIT as BASE_VISITS_EDIT,
  VISITS_VIEW as BASE_VISITS_VIEW,
} from "./config/routes";

export const VISITS_LIST: IRoute = {
  ...BASE_VISITS_LIST,
};

export const VISITS_CREATE: IRoute = {
  ...BASE_VISITS_CREATE,
};

export const VISITS_EDIT: IRoute = {
  ...BASE_VISITS_EDIT,
};

export const VISITS_VIEW: IRoute = {
  ...BASE_VISITS_VIEW,
};
