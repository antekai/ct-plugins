import { Menu, Switch, Typography } from "antd";
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

const icons = {
  "icon-marketing": <LineChartOutlined />,
  "icon-finance": <PieChartOutlined />,
  "icon-people": <ProfileOutlined />,
};

const NavigationSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { data: tabData } = useGetTabData();
  const { styles } = useStyles();

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
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={styles.sider}
      width={250}
    >
      {!collapsed && (
        <Typography.Title level={2} className={styles.title}>
          Dashboard
        </Typography.Title>
      )}

      <Menu
        mode="inline"
        selectedKeys={[location.pathname.split("/")[1]]}
        onSelect={handleNavigate}
        items={menuItems}
        className={styles.menu}
      />
      <div className={styles.switch}>
        {!collapsed && <Typography.Text>All plugins enabled</Typography.Text>}
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
      </div>
    </Sider>
  );
};

export default NavigationSider;
