import {
  newSmart,
  useRouter,
  useUIComponents,
  useTranslate,
  use,
} from "@bluelibs/x-ui";
import { useEffect, useState, useMemo } from "react";
import { RotationsAntTableSmart } from "./RotationsTableSmart";
import {
  PlusOutlined,
  FilterOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  DeleteOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";
import { features } from "../../config/features";
import { RotationsListFilters } from "./RotationsListFilters";
import Meta from "antd/lib/card/Meta";
import {
  Rotation,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";
import { VisitsAntTableSmart } from "./VisitsTableSmart";
import { ObjectId } from "@bluelibs/ejson";



export function RotationsList() {
  const UIComponents = useUIComponents();
  const router = useRouter();
  const t = useTranslate();
  const [api, Provider] = newSmart(RotationsAntTableSmart);
  const [apiVisits, ProviderVisits] = newSmart(VisitsAntTableSmart);
  const [filtersOpened, setFiltersOpened] = useState(false);
  const onFiltersUpdate = useMemo(() => {
    return (filters) => {
      api.setFlexibleFilters(filters);
    };
  }, []);
  const [result, setResult] = useState();
  const [selectedRotation, setSelectedRotation] = useState<Rotation>();

  const CheckIfCurrent = (currentDate, minDate, maxDate) => {
    if (currentDate > minDate && currentDate < maxDate) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (selectedRotation) generateVisitedList(selectedRotation);
  }, [apiVisits.getTableProps()]);
  const collection = use(RotationsCollection);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const generateVisitedList = (rotation) => {
    setResult(
      rotation.doctorsList
        .filter(
          (o1) =>
            !apiVisits
              .getTableProps()
              .dataSource.some((o2) => o1._id === o2.doctor._id)
        )
        .map((val) => {
          return { ...val, isVisited: false };
        })
        .concat(
          apiVisits.getTableProps().dataSource.map((val) => {
            return {
              _id: val.doctor._id,
              fullName: val.doctor.fullName,
              isVisited: true,
            };
          })
        )
    );
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
          <ProviderVisits>
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
              <InformationModal
                result={result}
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
              />
            </div>

            <Ant.List
              grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 4 }}
              dataSource={[...api.getTableProps().dataSource]}
              renderItem={(item) => {
                return (
                  <Ant.List.Item>
                    <Ant.Card
                      title={
                        CheckIfCurrent(
                          new Date(),
                          new Date(item.from),
                          new Date(item.to)
                        ) ? (
                          <>
                            <Ant.Tag color={"green"}>
                              {item.dateIntervale}
                            </Ant.Tag>
                          </>
                        ) : (
                          <Ant.Tag color={"cyan"}>{item.dateIntervale}</Ant.Tag>
                        )
                      }
                      style={{ marginTop: 16 }}
                      actions={[
                        <EditOutlined
                          onClick={() => {
                            router.go(Routes.ROTATIONS_EDIT, {
                              params: {
                                id: item._id,
                              },
                            });
                          }}
                          key="edit"
                        />,

                        <EyeOutlined
                          onClick={() => {
                            router.go(Routes.ROTATIONS_VIEW, {
                              params: {
                                id: item._id,
                              },
                            });
                          }}
                          key="view"
                        />,

                        <Ant.Popconfirm
                          key="delete"
                          style={{ zIndex: 999 }}
                          title="Are you sure you want to delete this Rotation?"
                          onConfirm={() => {
                            collection.deleteOne(item._id).then(() => {
                              Ant.notification.success({
                                message: "Success",
                                description: "You have deleted the Rotation",
                              });
                            });
                          }}
                        >
                          {" "}
                          <DeleteOutlined key="delete" />{" "}
                        </Ant.Popconfirm>,

                        <AreaChartOutlined
                          onClick={() => {
                            setSelectedRotation(item);
                            apiVisits.setFilters({ createdById: item.userId });
                            showModal();
                          }}
                          key="viewDetail"
                        />,
                      ]}
                    >
                      <h4>
                        Delegate :{" "}
                        <Ant.Tag color={"green"}>{item.user.fullName}</Ant.Tag>{" "}
                      </h4>
                      <h4>
                        Is Done :{" "}
                        {item.isDone ? (
                          <Ant.Tag color={"green"}>true</Ant.Tag>
                        ) : (
                          <Ant.Tag color={"red"}>false</Ant.Tag>
                        )}
                      </h4>
                      <h4>
                        Doctors List :{" "}
                        {item.doctorsList &&
                          item.doctorsList.map((value: any, idx: number) => {
                            return RenderDoctorsList(value, idx);
                          })}
                      </h4>
                    </Ant.Card>
                  </Ant.List.Item>
                );
              }}
            />
          </ProviderVisits>
        </Provider>
      </Ant.Layout.Content>
    </UIComponents.AdminLayout>
  );
  function RenderDoctorsList(value: any, idx: number) {
    const props = {
      type: "relation",
      value,
      relation: {
        path: router.path(Routes.DOCTORS_VIEW, {
          params: {
            id: value?._id,
          },
        }),
        dataIndex: "fullName",
      },
    };
    return (
      <UIComponents.AdminListItemRenderer
        {...props}
        key={idx} />
    );
  }
  
}


function InformationModal(props) {
  return (
    <Ant.Modal
      title="Visits Status "
      visible={props.isModalVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={1000}
    >
      <Ant.List
        size="small"
        header={<div>Rotation Status</div>}
        bordered
        dataSource={props.result}
        renderItem={(item: {
          _id: string;
          fullName: string;
          isVisited: boolean;
        }) => {
          console.log(item);
          return (
            <Ant.List.Item>
              <Ant.Tag color={"green"}>{item.fullName} </Ant.Tag>
              {item.isVisited ? (
                <Ant.Tag color={"green"}>Visited</Ant.Tag>
              ) : (
                <Ant.Tag color={"red"}>NotVisited</Ant.Tag>
              )}
            </Ant.List.Item>
          );
        }}
      />
    </Ant.Modal>
  );
}