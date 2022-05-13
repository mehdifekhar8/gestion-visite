import * as React from "react";
import { Menu as AntdMenu } from "antd";
import {
  use,
  useGuardian,
  useRouter,
  useTranslate,
  useUIComponents,
  XRouter,
} from "@bluelibs/x-ui";
import { IMenuItemConfig, MenuService } from "@bluelibs/x-ui-admin";


const AntdSubMenu = AntdMenu.SubMenu;

type Translator = (key: string) => string;

export  function AdminMenu() {
  const menuService = use(MenuService);
  const guardian = useGuardian();
  const router = useRouter();
  const t = useTranslate();
  const Components = useUIComponents();

  if (!guardian.state.initialised) {
    return null;
  }

  // We filter on each render for now because it should be super fast.
  // Otherwise we would need to do it in each MenuItem which can be cumbersome.
  const items = menuService.items.filter((item) => {
    console.log(item.roles)
    if (item.roles) {
      return guardian.hasRole(item.roles);
    }

    return true;
  });

  // Detect which paths are active based on their logic
  const { pathname } = router.history.location;
  const selectedOrOpenKeys = getSelectedKeys(items, pathname);

  return (
    <AntdMenu
      mode="inline"
      defaultOpenKeys={selectedOrOpenKeys}
      defaultSelectedKeys={selectedOrOpenKeys}
    >
      {/* Make sure that subitems are right under Menu or it will fail */}
      {items.map((item) => {
        
        return renderItem(item, router, t);
      })}
    </AntdMenu>
  );
}

export function renderItem(
  item: IMenuItemConfig,
  router: XRouter,
  t: Translator
): React.ReactElement {
  if (item.subitems && item.subitems.length) {
    return (
      <AntdSubMenu
        key={item.key}
        title={<ItemRender item={item} t={t} />}
        icon={item.icon ? React.createElement(item.icon) : undefined}
        onTitleClick={(e) => {
          if (item.path) {
            router.history.push(item.path);
          }
        }}
      >
        {item.subitems.map((subitem) => {
          return renderItem(subitem, router, t);
        })}
      </AntdSubMenu>
    );
  }

  return (
    <AntdMenu.Item
      key={item.key}
      onClick={() => {
        if (item.path) {
          router.history.push(item.path);
        }
      }}
      icon={item.icon ? React.createElement(item.icon) : undefined}
    >
      <ItemRender item={item} t={t} />
    </AntdMenu.Item>
  );
}

type ItemRenderProps = {
  item: IMenuItemConfig;
  t: Translator;
  children?: any;
};

function ItemRender(props: ItemRenderProps) {
  const { item, t } = props;

  if (typeof item.label === "string") {
    return <span>{t(item.label)}</span>;
  }

  return React.createElement(item.label);
}

function getSelectedKeys(items: IMenuItemConfig[], pathname: string) {
  const selectedKeys = [];

  items.forEach((item) => {
    if (item.isSelected) {
      if (item.isSelected(pathname)) {
        selectedKeys.push(item.key ? item.key : item.inject);
      }
    } else if (item.inject === pathname || item.key === pathname) {
      selectedKeys.push(item.key ? item.key : item.inject);
    }

    if (item.subitems) {
      const itemKeys = getSelectedKeys(item.subitems, pathname);
      selectedKeys.push(...itemKeys);
    }
  });

  return selectedKeys;
}