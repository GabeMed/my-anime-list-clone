import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  pagination: {
    has_next_page: boolean;
  };
  data: T;
}

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string, tag?: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id + tag)
      .then((res) => res.data);
  };
}

export default APIClient;
