import { Button, Menu, Switch, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetTabData } from "../api/tabs.api";
import {
  LineChartOutlined,
  PieChartOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import useStyles from "./App.styles";
import { useInitialize } from "../api/initialize.api";

const icons = {
  "icon-marketing": <LineChartOutlined />,
  "icon-finance": <PieChartOutlined />,
  "icon-people": <ProfileOutlined />,
};

const NavigationSider = () => {
  const { data: tabData } = useGetTabData();
  const { styles } = useStyles();
  const { mutate: putInitialData } = useInitialize();

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = Object.entries(tabData ?? {}).map(([key, values]) => ({
    key,
    label: values.title,
    icon: icons[values.icon as keyof typeof icons],
  }));

  const handleNavigate = ({ key }: { key: string }) => {
    const pageTitle = `${tabData[key].title} Plugins`;
    navigate(`/${key}`, { state: { pageTitle } });

    window.document.title = pageTitle;
  };

  return (
    <Sider className={styles.sider} width={250}>
      <Typography.Title level={2} className={styles.title}>
        Dashboard
      </Typography.Title>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname.split("/")[1]]}
        onSelect={handleNavigate}
        items={menuItems}
        className={styles.menu}
      />
      <div className={styles.switch}>
        <Typography.Text>All plugins enabled</Typography.Text>
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
      </div>

      <Button onClick={() => putInitialData()} className={styles.initialize}>
        Restore data
      </Button>
    </Sider>
  );
};

export default NavigationSider;
