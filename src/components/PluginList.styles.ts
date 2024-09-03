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
  },
}));

export default useStyles;
