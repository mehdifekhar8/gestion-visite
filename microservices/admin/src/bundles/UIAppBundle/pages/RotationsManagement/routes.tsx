import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  ROTATIONS_LIST as BASE_ROTATIONS_LIST,
  ROTATIONS_CREATE as BASE_ROTATIONS_CREATE,
  ROTATIONS_EDIT as BASE_ROTATIONS_EDIT,
  ROTATIONS_VIEW as BASE_ROTATIONS_VIEW,
} from "./config/routes";

export const ROTATIONS_LIST: IRoute = {
  ...BASE_ROTATIONS_LIST,
};

export const ROTATIONS_CREATE: IRoute = {
  ...BASE_ROTATIONS_CREATE,
};

export const ROTATIONS_EDIT: IRoute = {
  ...BASE_ROTATIONS_EDIT,
};

export const ROTATIONS_VIEW: IRoute = {
  ...BASE_ROTATIONS_VIEW,
};
