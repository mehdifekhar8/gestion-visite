import { Service } from "@bluelibs/core";
import { useGuardian } from "@bluelibs/x-ui";
import { RegionCreateForm as BaseRegionCreateForm } from "./RegionCreateForm.base";
import * as Ant from "antd";
import { Fragment } from "react";

@Service({ transient: true })
export class RegionCreateForm extends BaseRegionCreateForm {
  build() {
    const { t } = this.i18n;
    const guardian = useGuardian();

    super.build();

    if (!guardian.hasRole("ADMIN")) this.remove("superVisorId");
  }
}
