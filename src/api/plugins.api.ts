import { firebaseApi } from "./config";
import { useQuery } from "react-query";

export interface Plugin {
  title: string;
  description: string;
}

const PLUGINS_QUERY_KEY = "plugins";

const getPlugins = async (): Promise<Plugin[]> => {
  const response = await firebaseApi.get("/data/plugins.json");

  return response;
};

const useGetPlugins = () => {
  return useQuery<Plugin[]>({
    queryKey: [PLUGINS_QUERY_KEY],
    queryFn: getPlugins,
  });
};

export default useGetPlugins;
