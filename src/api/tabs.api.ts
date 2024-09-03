import { useMutation, useQuery } from "react-query";
import { firebaseApi, queryClient } from "./config";
import { MenuItemProps, message } from "antd";

interface Tab {
  title: string;
  active: string[];
  disabled: string[];
  inactive: string[];
  icon: string;
  menuItems: (MenuItemProps & { iconKey: string })[];
}

const TAB_DATA_QUERY_KEY = "tabData";

const getTabData = async (): Promise<Tab[]> => {
  const response = await firebaseApi.get("/data/tabdata.json");
  return response;
};

export const useGetTabData = () => {
  return useQuery<Tab[]>({
    queryKey: [TAB_DATA_QUERY_KEY],
    queryFn: getTabData,
  });
};

const patchTab = async ({
  tabId,
  data,
}: {
  tabId: string;
  data: Partial<Tab>;
}) => {
  const response = await firebaseApi.patch(`/data/tabdata/${tabId}.json`, data);
  return response;
};

export const usePatchTab = () => {
  return useMutation(patchTab, {
    onSuccess: () => {
      queryClient.invalidateQueries(TAB_DATA_QUERY_KEY);
      message.success("Plugin status updated");
    },
    onError: () => {
      message.error("Failed to update plugin status");
    },
  });
};
