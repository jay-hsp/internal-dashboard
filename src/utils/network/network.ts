import { BASE_URL } from "@/utils/constants";
import axios from "axios";

const client = axios.create({
  baseURL: BASE_URL,
});

export const request = async (options: any) => {

  client.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.params = { ...config.params, timestamp: Date.now() };
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  const onSuccess = async (response: any) => {
    // console.log(response?.data);
    return response?.data;
  };

  const onError = async (error: any) => {
    // console.log(error);
    return Promise.reject(error?.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
