import Providers from "./Providers";

import { Layout as AntLayout } from "antd";
import NavigationSider from "./NavigationSider";
import Routes from "./Routes";
import useStyles from "./App.styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { state } = useLocation();
  const { styles } = useStyles();

  return (
    <AntLayout.Header className={styles.header}>
      {state?.pageTitle ?? "Plugins Dashboard"}
    </AntLayout.Header>
  );
};

const App = () => {
  const { styles } = useStyles();

  return (
    <Providers>
      <AntLayout className={styles.layout}>
        <NavigationSider />

        <AntLayout>
          <Header />
          <AntLayout.Content style={{ margin: "24px 16px 0" }}>
            <Routes />
          </AntLayout.Content>
        </AntLayout>
      </AntLayout>
    </Providers>
  );
};

export default App;
