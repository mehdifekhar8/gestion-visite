import {
  newSmart,
  useRouter,
  useUIComponents,
  useTranslate,
  use,
} from "@bluelibs/x-ui";
import { useEffect, useState, useMemo } from "react";
import { DoctorsAntTableSmart } from "./DoctorsTableSmart";
import { PlusOutlined, FilterOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";
import { features } from "../../config/features";
import { DoctorsListFilters } from "./DoctorsListFilters";
import { ViewMarkers } from "@bundles/UIAppBundle/components/Map/ViewMarkers";
import { DoctorsCollection } from "@bundles/UIAppBundle/collections";

export function DoctorsList() {
  const UIComponents = useUIComponents();
  const router = useRouter();
  const t = useTranslate();
  const [api, Provider] = newSmart(DoctorsAntTableSmart);
  const [filtersOpened, setFiltersOpened] = useState(false);
  const onFiltersUpdate = useMemo(() => {
    return (filters) => {
      api.setFlexibleFilters(filters);
    };
  }, []);
  const doctorsCollection = use(DoctorsCollection);

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    doctorsCollection
      .find(
        {},
        {
          // We specify which fields to use
          _id: 1,
          fullName: 1,
          phone: 1,
          coordinates: {
            lat: 1,
            lng: 1,
          },
        }
      )
      .then((doctors) => {
        setDoctors(doctors);
        console.log(doctors);
      });
  },[api.getTableProps().dataSource]);
  return (
    <UIComponents.AdminLayout>
      
      <Ant.PageHeader
        title={t("management.doctors.list.header")}
        extra={[
          features.create ? (
            <Ant.Button
              key="1"
              onClick={() => router.go(Routes.DOCTORS_CREATE)}
              icon={<PlusOutlined />}
            >
              {t("management.doctors.list.create_btn")}
            </Ant.Button>
          ) : null,
          <Ant.Button
            key="2"
            onClick={() => setFiltersOpened(!filtersOpened)}
            icon={<FilterOutlined />}
          >
            {t("generics.list_filters")}
          </Ant.Button>,
        ]}
      />

      {api.state.isError && (
        <Ant.Alert type="error" message={t("generics.error_message")} />
      )}

      <Ant.Layout.Content>
        <Provider>
          <div className="page-doctors-list">
            {filtersOpened && <DoctorsListFilters onUpdate={onFiltersUpdate} />}
            <Ant.Input.Search
              name="Search"
              placeholder={t("generics.list_search")}
              className="search"
              onKeyUp={(e) => {
                const value = (e.target as HTMLInputElement).value;
                api.setFilters({
                  // Customise your search filters!
                  title: new RegExp(`${value}`, "i"),
                });
              }}
            />
            <Ant.Table {...api.getTableProps()} />
          </div>
          <div className="doctors-map-view">
            <ViewMarkers currentLocation={doctors}/>
          </div>
        </Provider>
      </Ant.Layout.Content>
    </UIComponents.AdminLayout>
  );
}
