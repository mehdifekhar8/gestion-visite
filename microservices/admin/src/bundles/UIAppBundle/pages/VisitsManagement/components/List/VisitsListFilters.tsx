import {
  DoctorsCollection,
  VisitsCollection,
} from "@bundles/UIAppBundle/collections";
import * as Ant from "antd";
import * as React from "react";
import * as debounce from "lodash.debounce";
import { use, useTranslate } from "@bluelibs/x-ui";
import { VisitListFiltersForm } from "../../config/VisitListFiltersForm";

type VisitsListFiltersProps = {
  onUpdate: (filters: any) => void;
};

export const VisitsListFilters = React.memo(VisitsListFiltersBase);

export function VisitsListFiltersBase(props: VisitsListFiltersProps) {
  const [form] = Ant.Form.useForm();
  const t = useTranslate();

  const debouncedFilterUpdates = React.useMemo(() => {
    const setFilters = (_, filters) => {
      props.onUpdate(filters);
    };
    return debounce(setFilters, 500);
  }, [props.onUpdate]);

  const filterForm = use(VisitListFiltersForm, { transient: true });
  filterForm.build();

  return (
    <Ant.Form
      form={form}
      labelCol={{ span: 24 }}
      onValuesChange={debouncedFilterUpdates}
    >
      <Ant.Row gutter={[16, 8]}>
        {filterForm.rest().map((item) => {
          return (
            <Ant.Col span={8} key={item.id}>
              {filterForm.render(item)}
            </Ant.Col>
          );
        })}
      </Ant.Row>
      <Ant.Form.Item>
        <Ant.Button
          htmlType="button"
          onClick={() => {
            form.resetFields();
            props.onUpdate({});
          }}
        >
          {t("generics.list_filters_reset")}
        </Ant.Button>
      </Ant.Form.Item>
    </Ant.Form>
  );
}
