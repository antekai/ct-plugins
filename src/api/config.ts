import axios, { AxiosResponse } from "axios";
import { QueryClient } from "react-query";

const { VITE_FIREBASE_URL } = import.meta.env;

export const firebaseApi = axios.create({
  baseURL: VITE_FIREBASE_URL,
});

firebaseApi.interceptors.response.use((response: AxiosResponse) => {
  return response?.data;
});

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
