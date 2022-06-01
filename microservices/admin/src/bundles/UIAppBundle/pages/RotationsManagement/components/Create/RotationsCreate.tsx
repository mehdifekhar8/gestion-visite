import { Routes } from "@bundles/UIAppBundle";
import { useUIComponents, useRouter, use, useTranslate } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { RotationCreateForm } from "../../config/RotationCreateForm";
import {
  Rotation,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";

const formLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 }, md: { span: 6 }, lg: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, md: { span: 16 }, lg: { span: 16 } }
};

const formTailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function RotationsCreate() {
  const UIComponents = useUIComponents();
  const t = useTranslate();
  const form = use(RotationCreateForm, { transient: true });
  form.build();

  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.rotations.create.header")}
        onBack={() => window.history.back()}
      />
      <Ant.Card>
        <Ant.Form
          {...formLayout}
          requiredMark="optional"
          onFinish={(document) => form.onCustomSubmit(document)}
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
