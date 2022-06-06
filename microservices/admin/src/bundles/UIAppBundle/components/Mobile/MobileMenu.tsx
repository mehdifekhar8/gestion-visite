import React, { useState } from "react";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { IMenuItemConfig, MenuService } from "@bluelibs/x-ui-admin";
import {
  use,
  useGuardian,
  useRouter,
  useTranslate,
  XRouter,
} from "@bluelibs/x-ui";
import { getSelectedKeys } from "@bundles/UIAppBundle/overrides/AdminMenu";

export default () => {
  const menuService = use(MenuService);
  const guardian = useGuardian();
  const router = useRouter();
  const t = useTranslate();

  if (!guardian.state.initialised) {
    return null;
  }
  const items = menuService.items.filter((item) => {
    if (item.roles) {
      return guardian.hasRole(item.roles);
    }

    return true;
  });
  const { pathname } = router.history.location;

  const selectedOrOpenKeys = getSelectedKeys(items, pathname);

  console.log(selectedOrOpenKeys);

  return (
    <>
      <TabBar
      style={{backgroundColor:"#001529"}}
        onChange={(val) => {
          const f: any = items.filter((item) => {
            if (item.key == val) {
              return item;
            }
          });

          router.history.push(f[0].path);
        }}
        activeKey={selectedOrOpenKeys[0]}
      >
        {items.map((item) => {
          return (
            <TabBar.Item
              key={item.key}
              icon={<item.icon></item.icon>}
              title={<ItemRender item={item} t={t} />}
            />
          );
        })}
      </TabBar>
    </>
  );
};
type Translator = (key: string) => string;
function ItemRender(props: ItemRenderProps) {
  const { item, t } = props;

  if (typeof item.label === "string") {
    return (
      <span>{item.label == "Dashboard" ? item.label : t(item.label)}</span>
    );
    //you have removed translation for dashboard
  }

  return React.createElement(item.label);
}
type ItemRenderProps = {
  item: IMenuItemConfig;
  t: Translator;
  children?: any;
};
