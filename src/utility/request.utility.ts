import axios, { AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders, Method } from "axios";
import * as qs from "qs";


export const sendRequest = async (method: Method, headers: any, url: string, dataRes: any): Promise<AxiosPromise> => {
  const data = method === "post" ? qs.stringify(dataRes) : dataRes;
  const config: AxiosRequestConfig = {
    method,
    url,
    headers,
    data
  };

  try {
    return await axios(config);
  } catch (e) {
    console.log("Request failed cause:")
    console.log(e?.response?.data);
  }
};
