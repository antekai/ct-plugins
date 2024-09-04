import { createStyles } from "antd-style";

const useStyles = createStyles(() => ({
  list: {
    display: "flex",
    flexWrap: "wrap",
    gap: 32,
    maxWidth: 1200,
  },
  card: {
    width: 300,
    "& .ant-card-head": {
      border: "none",
    },
  },
  disabled: {
    opacity: 0.5,
  },
  cardExtra: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
    height: 70,
  },
}));

export default useStyles;
