import { Service } from "@bluelibs/core";
import { VisitCreateForm as BaseVisitCreateForm } from "./VisitCreateForm.base";
import * as Ant from "antd";
import { AddMarker } from "@bundles/UIAppBundle/components/Map/AddMarker";
import { useState } from "react";

@Service({ transient: true })
export class VisitCreateForm extends BaseVisitCreateForm {
  build() {
    super.build();
    this.remove("locationValidation")
    this.update("coordinates", {
      label: "Show Map",
      required: false,
      render: (props: { onChange: () => void; value: string } & any) => {
        return (
          <div style={{ display: "none" }}>
            {" "}
            <Ant.Form.Item name="body" {...props}>
              <AddMarker
                show={false}
                isEditable={false}
                onChange={props.onChange}
              />
            </Ant.Form.Item>
          </div>
        );
      },
    });
    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
