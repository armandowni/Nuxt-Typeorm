import axios from "axios";

export default axios.create({
  baseURL: process.env.NUXT_API_SECRET,
});
