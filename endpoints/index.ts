import axios from "axios";

const API_VER = "v1";

export function useApi(config?: any) {
  let base_path = `http://192.168.100.97:8000/api/${API_VER}`;

  const get = async (url: string, query?: string) => {
    base_path = base_path + url;
    console.log("test");

    const result = await axios
      .get(base_path)
      .then((result) => result.data)
      .catch((err) => err);
    // const result = await axios.get(base_path);
    console.log("test1");

    return result;
  };

  return { get };
}
