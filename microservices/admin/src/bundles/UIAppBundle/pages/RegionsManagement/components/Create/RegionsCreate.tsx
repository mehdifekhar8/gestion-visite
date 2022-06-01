import { Routes } from "@bundles/UIAppBundle";
import { useUIComponents, useRouter, use, useTranslate } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { RegionCreateForm } from "../../config/RegionCreateForm";
import { Region, RegionsCollection } from "@bundles/UIAppBundle/collections";

const formLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 }, md: { span: 8 }, lg: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 14 }, lg: { span: 16 } }
};

const formTailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function RegionsCreate() {
  const UIComponents = useUIComponents();
  const t = useTranslate();
  const form = use(RegionCreateForm, { transient: true });
  form.build();

  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.regions.create.header")}
        onBack={() => window.history.back()}
      />
      <Ant.Card>
        <Ant.Form
          {...formLayout}
          requiredMark="optional"
          onFinish={(document) => form.onSubmit(document)}
        >
          {form.render()}
          <Ant.Form.Item {...formTailLayout}>
            <Ant.Button type="primary" htmlType="submit">
              {t("generics.submit")}
            </Ant.Button>
          </Ant.Form.Item>
        </Ant.Form>
      </Ant.Card>
    </UIComponents.AdminLayout>
  );
}
