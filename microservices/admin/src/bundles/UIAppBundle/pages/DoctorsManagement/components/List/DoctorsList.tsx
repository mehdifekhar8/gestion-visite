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
  const { TabPane } = Ant.Tabs;

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
      });
  }, [api.getTableProps().dataSource]);
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
                console.log(value);

                api.setFilters({
                  '$text': { '$search': 'v1' } ,
                  // $or: [
                  //   { "profile.lastName": new RegExp(`${value.split(' ')}`, "i") },
                  //   { "profile.firstName": new RegExp(`${value.split(' ')}`, "i") },
                  // ],
                });
              }}
            />
            <Ant.Tabs defaultActiveKey="1" onChange={() => {}}>
              <TabPane tab="Tab 1" key="1">
                <Ant.Table {...api.getTableProps()} />
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                <div className="doctors-map-view">
                  <ViewMarkers currentLocation={doctors} />
                </div>
              </TabPane>
            </Ant.Tabs>
          </div>
        </Provider>
      </Ant.Layout.Content>
    </UIComponents.AdminLayout>
  );
}
