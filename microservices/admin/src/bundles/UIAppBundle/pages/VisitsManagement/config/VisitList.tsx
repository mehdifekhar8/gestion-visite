import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Visit } from "@bundles/UIAppBundle/collections";
import { Fragment } from "react";
import { VisitList as BaseVisitList } from "./VisitList.base";
import * as Ant from "antd";

@Service({ transient: true })
export class VisitList extends BaseVisitList {
  build() {
    super.build();
    if (process.env.MODE != "advanced") {
      this.remove("rotation");
    }
    this.update("createdAt", {
      responsive: ["sm"]
    })
    this.update("updatedAt", {
      responsive: ["sm"]
    })
    this.update("information", {
      responsive: ["sm"]
    })
    this.update("information2", {
      responsive: ["sm"]
    })
    this.update("coordinates.lat", {
      responsive: ["sm"]
    })
    this.update("coordinates.lng", {
      responsive: ["sm"]
    })
    this.update("locationValidation", {
      responsive : ["sm"]
    })
    this.update("createdBy", {
      responsive : ["sm"]
    })
    this.update("updatedBy", {
      responsive : ["sm"]
    })
    this.update("doctor", {
      responsive : ["sm"]
    })
    this.update("rotation", {
      responsive : ["sm"]
    })
    this.add({
      id: "fullNameOne",
      title: "Information's",
      key: "management.doctors.fields.fullName",
      dataIndex: ["locationValidation"],
      sorter: true,
      width: 200,

      render: (record, modal) => {
        console.log(modal);
        return (
          <Fragment>
            {Object.keys(modal).map((data) => {
              if (modal[data] && data != "_id")
                return typeof modal[data] != "object" ? (
                  <h4> {data + " : " + modal[data].toString()} </h4>
                ) : (
                  Object.keys(modal[data]).map(
                    (val) =>
                      val != "_id" &&
                      data != "coordinates" &&
                      data != "createdBy" &&
                      data != "updatedBy" &&
                      modal[data][val] && (
                        <h4>
                          {" "}
                          {data + " : "}{" "}
                          <Ant.Tag color="green">
                            {modal[data][val].toString()}{" "}
                          </Ant.Tag>{" "}
                        </h4>
                      )
                  )
                );
            })}
          </Fragment>
        );
      },

      responsive: ["xs"],
    });
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Visit> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
