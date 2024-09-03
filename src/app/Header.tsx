import { useLocation } from "react-router-dom";
import { Layout as AntLayout } from "antd";
import useStyles from "./App.styles";

const Header = () => {
  const { state } = useLocation();
  const { styles } = useStyles();

  return (
    <AntLayout.Header className={styles.header}>
      {state?.pageTitle ?? "Plugins Dashboard"}
    </AntLayout.Header>
  );
};

export default Header;
