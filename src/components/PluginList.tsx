// import { useParams } from "react-router-dom";
import { Card, Switch } from "antd";
import useGetPlugins from "../api/plugins.api";
import { Plugin } from "../api/plugins.api";
import useStyles from "./PluginList.styles";

const PluginList = () => {
  const { styles } = useStyles();
  // const { tabId } = useParams<{ tabId: string }>();
  const { data: plugins, isLoading } = useGetPlugins();

  if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error loading data</div>;

  return (
    <div className={styles.list}>
      {Object.entries(plugins ?? {}).map(([key, values]: [string, Plugin]) => (
        <Card
          title={values.title}
          extra={<Switch />}
          key={key}
          className={styles.card}
        >
          {values.description}
        </Card>
      ))}
    </div>
  );
};

export default PluginList;
