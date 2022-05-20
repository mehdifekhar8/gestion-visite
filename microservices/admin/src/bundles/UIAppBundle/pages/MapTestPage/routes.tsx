import { IRoute } from "@bluelibs/x-ui";
import { AddMarker } from "@bundles/UIAppBundle/components/Map/AddMarker";
import { CurrentPosition } from "./CurrentPosition";
import { DraggableMarker } from "./DraggableMarker";
import { InfoBoxComponent } from "./InfoBoxComponent";
import { Map } from "./Map";
import { MapClickMarker } from "./MapClickMarker";
import { TestComponent } from "./TestComponent";

export const Mapr: IRoute = {
  path: "/map",
  component: TestComponent,
};


