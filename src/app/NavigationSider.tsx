import { Menu, Switch } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetTabData } from "../api/tabs.api";
import {
  LineChartOutlined,
  PieChartOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const icons = {
  "icon-marketing": <LineChartOutlined />,
  "icon-finance": <PieChartOutlined />,
  "icon-people": <ProfileOutlined />,
};

const NavigationSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { data: tabData } = useGetTabData();

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
      theme="light"
    >
      <div>
        <h2>Dashboard</h2>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname.split("/")[1]]}
          onSelect={handleNavigate}
          items={menuItems}
        />
        <Switch
          checkedChildren="ON"
          unCheckedChildren="OFF"
          style={{ marginTop: "20px" }}
        />
      </div>
    </Sider>
  );
};

export default NavigationSider;
