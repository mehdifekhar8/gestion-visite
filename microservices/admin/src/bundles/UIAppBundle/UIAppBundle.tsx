import { XRouter, XUIBundle } from "@bluelibs/x-ui";
import * as Routes from "./routes";
import { Bundle } from "@bluelibs/core";
import { AppGuardian } from "./services/AppGuardian";
import { i18n } from "./i18n";
import * as ComponentOverrides from "./overrides";
import { AdminMenu } from "./overrides/AdminMenu";

export class UIAppBundle extends Bundle {
  async init() {
    const xui = this.container.get(XUIBundle);
    xui.updateComponents({AdminMenu ,...ComponentOverrides});

    xui.setGuardianClass(AppGuardian);
    xui.storeI18N(i18n);

    const router = this.container.get(XRouter);
    router.add(Routes);
  }
}
