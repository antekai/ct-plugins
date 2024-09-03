import { useMutation } from "react-query";
import initialData from "../initialData.json";
import { firebaseApi, queryClient } from "./config";
import { message } from "antd";

const putInitialData = async () => {
  const response = await firebaseApi.put("data.json", initialData);
  return response;
};

export const useInitialize = () => {
  return useMutation(putInitialData, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      message.success("Data restored");
    },
    onError: () => {
      message.error("Failed to restore data");
    },
  });
};
