import { useParams } from "react-router-dom";
import { Card, Switch, Typography } from "antd";
import useGetPlugins from "../api/plugins.api";
import { Plugin } from "../api/plugins.api";
import useStyles from "./PluginList.styles";
import { useGetTabData, usePatchTab } from "../api/tabs.api";

interface TabPlugin extends Plugin {
  active: boolean;
  disabled: boolean;
  inactive: boolean;
}

const PluginList = () => {
  const { styles, cx } = useStyles();
  const { tabId } = useParams<{ tabId: string }>();
  const tabData = useGetTabData();
  const plugins = useGetPlugins();
  const { mutate: patchTab } = usePatchTab();

  if (tabData.isLoading || plugins.isLoading) return <div>Loading...</div>;
  if (tabData.error || plugins.error) return <div>Error loading data</div>;

  const tabPluginData = tabData.data?.[tabId];

  const pluginList: Record<string, TabPlugin> = Object.entries(
    plugins.data ?? {}
  ).reduce((acc, [key, value]) => {
    const isActive = tabPluginData?.active?.includes(key);
    const isDisabled = tabPluginData?.disabled?.includes(key);
    const isInactive = tabPluginData?.inactive?.includes(key);
    if (isActive || isDisabled || isInactive) {
      acc[key] = {
        ...value,
        active: isActive,
        disabled: isDisabled,
        inactive: isInactive,
      };
    }

    return acc;
  }, {});

  const handleTogglePlugin = (pluginId: string, active: boolean) => {
    const data = active
      ? {
          active: [...(tabPluginData?.active ?? []), pluginId],
          inactive:
            tabPluginData?.inactive?.filter((id) => id !== pluginId) ?? [],
        }
      : {
          active: tabPluginData?.active?.filter((id) => id !== pluginId) ?? [],
          inactive: [...(tabPluginData?.inactive ?? []), pluginId],
        };

    patchTab({ tabId, data });
  };

  if (Object.keys(pluginList).length === 0) {
    return <div>No plugins found</div>;
  }

  return (
    <div className={styles.list}>
      {Object.entries(pluginList ?? {}).map(([pluginId, values]) => (
        <Card
          key={pluginId}
          data-testid={`card-${pluginId}`}
          title={values.title}
          aria-disabled={values.disabled}
          extra={
            <div className={cx(styles.cardExtra)}>
              <Switch
                data-testid={`switch-${pluginId}`}
                value={values.active}
                onChange={(active) => handleTogglePlugin(pluginId, active)}
                disabled={values.disabled}
              />
              <Typography.Text>
                {values.active ? "Allowed" : "Blocked"}
              </Typography.Text>
            </div>
          }
          className={cx(styles.card, values.disabled && styles.disabled)}
        >
          {values.description}
        </Card>
      ))}
    </div>
  );
};

export default PluginList;
