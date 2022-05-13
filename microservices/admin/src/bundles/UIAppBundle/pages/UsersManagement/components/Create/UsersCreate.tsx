import { Routes } from "@bundles/UIAppBundle";
import { useUIComponents, useRouter, use, useTranslate } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { UserCreateForm } from "../../config/UserCreateForm";
import { User, UsersCollection } from "@bundles/UIAppBundle/collections";
import { gql, useMutation } from "@apollo/client";

const UserRegistration = gql`
  mutation Mutation($document: UserRegistrationInput!) {
    UserRegistration(document: $document)
  }
`;

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const formTailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function UsersCreate() {
  const [userRegistration] = useMutation(UserRegistration);

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
            userRegistration({variables: { document },});
            console.log("ok");
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
