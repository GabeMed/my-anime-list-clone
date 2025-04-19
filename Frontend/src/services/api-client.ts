import axios from "axios";

export interface FetchResponse<T> {
  pagination?: object;
  data: T[];
}

export default axios.create({
  baseURL: "https://api.jikan.moe/v4",
});
