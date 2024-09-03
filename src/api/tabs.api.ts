import { useQuery } from "react-query";
import { firebaseApi } from "./config";
import { MenuItemProps } from "antd";

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
