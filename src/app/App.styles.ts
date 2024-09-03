import { createStyles } from "antd-style";

const useStyles = createStyles(({ token, responsive, css }) => ({
  layout: {
    minHeight: "100vh",
  },
  header: {
    padding: "0 32px",
    backgroundColor: token.colorBgBase,
    fontSize: 16,
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
  title: css`
    padding-left: 24px;
    ${responsive.mobile} {
      display: none;
    }
  `,
  controls: css`
    position: fixed;
    bottom: 24px;
    left: 32px;
    display: grid;
    gap: 32px;
    ${responsive.mobile} {
      display: none;
    }
  `,
  switch: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  initialize: css`
    /* margin: 24px 0 0 24px; */
    ${responsive.mobile} {
      display: none;
    }
  `,
}));

export default useStyles;
