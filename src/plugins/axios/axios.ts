import { CacheEnum } from "@/enum/cacheEnum";
import { local } from "@/utils";
import axios, { AxiosRequestConfig } from "axios";

export default class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.interceptors();
  }

  public async request<T, D = ResponseResult<T>>(
    config: AxiosRequestConfig
  ): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] =
          "Bearer " + local.get(CacheEnum.TOKEN_KEY);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
