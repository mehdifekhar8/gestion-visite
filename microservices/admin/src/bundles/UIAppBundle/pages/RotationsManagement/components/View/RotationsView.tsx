import { Link } from "react-router-dom";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";
import {
  useUIComponents,
  useRouter,
  useDataOne,
  use,
  XRouter,
  useTranslate,
} from "@bluelibs/x-ui";
import { ObjectId } from "@bluelibs/ejson";
import {
  Rotation,
  RotationsCollection,
} from "@bundles/UIAppBundle/collections";
import { RotationViewer } from "../../config/RotationViewer";
import { features } from "../../config/features";

export function RotationsView(props: { id: string }) {
  const UIComponents = useUIComponents();
  const router = useRouter();
  const t = useTranslate();
  const collection = use(RotationsCollection);

  // If you want to benefit of live data features use useLiveData()
  const {
    data: document,
    isLoading,
    error,
  } = useDataOne(
    RotationsCollection,
    new ObjectId(props.id),
    RotationViewer.getRequestBody()
  );

  let content;
  if (isLoading) {
    content = (
      <Ant.Space align="center">
        <Ant.Spin size="large" />
      </Ant.Space>
    );
  } else {
    if (error || document === null) {
      content = (
        <Ant.Alert
          message={error || t("generics.error_message")}
          type="error"
        />
      );
    } else {
      content = <RotationsViewComponent document={document} />;
    }
  }

  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.rotations.view.header")}
        onBack={() => window.history.back()}
        extra={getHeaderActions(collection, router, props.id)}
      />
      <Ant.Card>{content}</Ant.Card>
    </UIComponents.AdminLayout>
  );
}

export function RotationsViewComponent(props: { document: Partial<Rotation> }) {
  const document = props.document;

  const viewer = use(RotationViewer, { transient: true });
  viewer.setDocument(document);
  viewer.build();

  return (
    <Ant.Descriptions>
      {viewer.rest().map((item) => {
        return (
          <Ant.Descriptions.Item label={item.label} key={item.id}>
            {viewer.render(item)}
          </Ant.Descriptions.Item>
        );
      })}
    </Ant.Descriptions>
  );
}

export function getHeaderActions(
  collection: RotationsCollection,
  router: XRouter,
  id: string
) {
  const actions = [];
  const t = useTranslate();

  if (features.edit) {
    actions.push(
      <Link
        key="edit"
        to={router.path(Routes.ROTATIONS_EDIT, {
          params: { id },
        })}
      >
        <Ant.Button>{t("generics.edit")}</Ant.Button>
      </Link>
    );
  }
  if (features.delete) {
    actions.push(
      <Ant.Popconfirm
        key="delete"
        title="Are you sure you want to delete this Rotation?"
        onConfirm={() => {
          collection.deleteOne(id).then(() => {
            router.go(Routes.ROTATIONS_LIST);
            Ant.notification.success({
              message: "Success",
              description: "You have deleted the Rotation",
            });
          });
        }}
      >
        <Ant.Button danger>{t("generics.delete")}</Ant.Button>
      </Ant.Popconfirm>
    );
  }

  const viewRoutePath = router.path(Routes.ROTATIONS_VIEW, {
    params: { id },
  });

  return actions;
}
