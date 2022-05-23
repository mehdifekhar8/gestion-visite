import { useUIComponents, use, useTranslate, useRouter } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { UserCreateForm } from "../../config/UserCreateForm";
import { useMutation } from "@apollo/client";
import { UserRegistration } from "../../mutations/UserRegistration";
import { UserRegistrationInput } from "@root/api.types";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const formTailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function UsersCreate() {
  const [userRegistration] = useMutation(UserRegistration);
  const router = useRouter();

  const UIComponents = useUIComponents();
  const t = useTranslate();
  const form = use(UserCreateForm, { transient: true });
  form.build();
  
  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.users.create.header")}
        onBack={() => window.history.back()}
      />
      <Ant.Card>
        <Ant.Form
          {...formLayout}
          requiredMark="optional"
          onFinish={(document) => {
            userRegistration({
              variables: { document },
            })
              .then((data) => {
                Ant.notification.success({
                  message: t("generics.success"),
                  description: t("management.users.create_confirmation"),
                  icon: <SmileOutlined />,
                });
                router.go(Routes.USERS_VIEW, {
                  params: {
                    id: data.data.UserRegistration,
                  },
                });
              })
              .catch((err) => {
                Ant.notification.warn({
                  message: t("generics.error"),
                  description: t("generics.error_message"),
                });
              });
          }}
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
