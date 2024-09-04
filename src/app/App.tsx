import Providers from "./Providers";
import { Layout as AntLayout, Typography } from "antd";
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
          <AntLayout.Footer className={styles.footer}>
            <Typography.Text>Source code:</Typography.Text>
            <Typography.Link
              href="https://github.com/antekai/ct-plugins"
              target="_blank"
            >
              Github
            </Typography.Link>
          </AntLayout.Footer>
        </AntLayout>
      </AntLayout>
    </Providers>
  );
};

export default App;
