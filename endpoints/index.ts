import axios from "axios";
import { SERVER_HOST, SERVER_PORT } from "../static/const";

const API_VER = "v1";

export function useApi(config?: any) {
  let base_path = `http://${SERVER_HOST}:${SERVER_PORT}/api/${API_VER}`;

  const get = async (url: string, query?: string) => {
    base_path = base_path + url;
    // console.log("test");

    const result = await axios
      .get(base_path)
      .then((result) => result.data)
      .catch((err) => err);
    // const result = await axios.get(base_path);
    // console.log("test1");

    return result;
  };
  const post = async (url: string, data: any) => {
    base_path = base_path + url;

    const result = await axios
      .post(base_path, data)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const put = async (url: string, data: any) => {
    base_path = base_path + url;

    const result = await axios
      .put(base_path, data)
      .then((result) => result.data)
      .catch((err) => err);

    // return "";
    return result;
  };
  const del = async (url: string) => {
    base_path = base_path + url;
    const result = await axios
      .delete(base_path)
      .then((result) => result.data)
      .catch((err) => err);

    // return "";
    return result;
  };

  return { get, post, put, del };
}
