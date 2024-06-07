import { BASE_URL } from "@/utils/constants";
import axios from "axios";

const client = axios.create({
  baseURL: BASE_URL,
});

export const request = async (options: any) => {

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
