import {
  newSmart,
  useRouter,
  useUIComponents,
  useTranslate,
} from "@bluelibs/x-ui";
import { useEffect, useState, useMemo } from "react";
import { RotationsAntTableSmart } from "./RotationsTableSmart";
import {
  PlusOutlined,
  FilterOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";
import { features } from "../../config/features";
import { RotationsListFilters } from "./RotationsListFilters";
import Meta from "antd/lib/card/Meta";

export function RotationsList() {
  const UIComponents = useUIComponents();
  const router = useRouter();
  const t = useTranslate();
  const [api, Provider] = newSmart(RotationsAntTableSmart);
  const [filtersOpened, setFiltersOpened] = useState(false);
  const onFiltersUpdate = useMemo(() => {
    return (filters) => {
      api.setFlexibleFilters(filters);
    };
  }, []);
  const data = api.getTableProps().dataSource;
  console.log(data);
  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.rotations.list.header")}
        extra={[
          features.create ? (
            <Ant.Button
              key="1"
              onClick={() => router.go(Routes.ROTATIONS_CREATE)}
              icon={<PlusOutlined />}
            >
              {t("management.rotations.list.create_btn")}
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
          <div className="page-rotations-list">
            {filtersOpened && (
              <RotationsListFilters onUpdate={onFiltersUpdate} />
            )}
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

          <Ant.List
            grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 4 }}
            dataSource={[...data]}
            renderItem={(item) => (
              <Ant.List.Item>
                <Ant.Card
                  title={item.dateIntervale}
                  style={{ marginTop: 16 }}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <p>hey</p>
                  <p>hey</p>
                  <p>hey</p>
                  <p>hey</p>
                  <p>hey</p>
                </Ant.Card>
              </Ant.List.Item>
            )}
          />
        </Provider>
      </Ant.Layout.Content>
    </UIComponents.AdminLayout>
  );
}
