import Providers from "./Providers";
import { Layout as AntLayout } from "antd";
import NavigationSider from "./NavigationSider";
import Routes from "./Routes";
import useStyles from "./App.styles";
import Header from "./Header";

const App = () => {
  const { styles } = useStyles();

  return (
    <Providers>
      <AntLayout className={styles.layout}>
        <NavigationSider />

        <AntLayout>
          <Header />
          <AntLayout.Content className={styles.content}>
            <Routes />
          </AntLayout.Content>
        </AntLayout>
      </AntLayout>
    </Providers>
  );
};

export default App;
