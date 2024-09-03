import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => ({
  layout: {
    minHeight: "100vh",
  },
  header: {
    padding: "0 32px",
    backgroundColor: token.colorBgBase,
  },
  content: {
    padding: "24px 32px",
    backgroundColor: token.colorBgBase,
  },
  sider: {
    "&&&&": {
      backgroundColor: token.colorBgBlur,
    },
    position: "relative",
    "& .ant-layout-sider-trigger": {
      background: token.colorPrimary,
    },
  },
  menu: {
    backgroundColor: token.colorBgBlur,
    borderRight: "none",
    "& .ant-menu-item": {
      margin: 0,
      width: "100%",
      borderRadius: 0,
    },
  },
  title: {
    paddingLeft: 24,
  },
  hidden: {
    visibility: "hidden",
    height: 48,
  },
  switch: {
    position: "fixed",
    bottom: 100,
    left: 32,
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
}));

export default useStyles;
