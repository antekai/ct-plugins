import { Button, Menu, Switch, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetTabData, usePatchTab } from "../api/tabs.api";
import {
  LineChartOutlined,
  PieChartOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import useStyles from "./App.styles";
import { useInitialize } from "../api/initialize.api";
import { useEffect } from "react";

const icons = {
  "icon-marketing": <LineChartOutlined />,
  "icon-finance": <PieChartOutlined />,
  "icon-people": <ProfileOutlined />,
};

const NavigationSider = () => {
  const { data: tabData } = useGetTabData();
  const { styles } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: putInitialData } = useInitialize();
  const { mutate: patchTab } = usePatchTab();
  const tabId = location.pathname.split("/")[1];

  const menuItems = Object.entries(tabData ?? {}).map(([key, values]) => ({
    key,
    label: values.title,
    icon: icons[values.icon as keyof typeof icons],
  }));

  useEffect(() => {
    const selectedTabLabel =
      menuItems.find((item) => item.key === tabId)?.label ?? "";

    document.title = `${selectedTabLabel} Plugins`;
  }, [tabId, tabData, menuItems]);

  const handleNavigate = ({ key }: { key: string }) => {
    const pageTitle = `${tabData[key].title} Plugins`;
    navigate(`/${key}`, { state: { pageTitle } });
  };

  const tabDetails = tabData?.[tabId];

  const tabPlugins = [
    ...new Set([
      ...(tabDetails?.active ?? []),
      ...(tabDetails?.inactive ?? []),
      ...(tabDetails?.disabled ?? []),
    ]),
  ];

  const allDisabled = tabDetails?.disabled?.length === tabPlugins.length;

  const handleDisableAll = (checked: boolean) => {
    const data = checked
      ? { disabled: tabPlugins }
      : {
          disabled: [],
          inactive: [tabData[tabId]?.inactive, tabData[tabId]?.disabled].flat(),
        };

    patchTab({ tabId, data });
  };

  return (
    <Sider className={styles.sider} width={250} breakpoint="sm">
      <Typography.Title level={2} className={styles.title}>
        Dashboard
      </Typography.Title>

      <Menu
        mode="inline"
        selectedKeys={[tabId]}
        onSelect={handleNavigate}
        items={menuItems}
        className={styles.menu}
      />
      <div className={styles.controls}>
        <div className={styles.switch}>
          <Typography.Text>
            {`${allDisabled ? "Enable" : "Disable"} all plugins`}
          </Typography.Text>
          <Switch onChange={handleDisableAll} value={allDisabled} />
        </div>

        <Button onClick={() => putInitialData()} className={styles.initialize}>
          Restore data
        </Button>
      </div>
    </Sider>
  );
};

export default NavigationSider;
