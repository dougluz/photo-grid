import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  timeout: 10000,
  headers: {
    Authorization: import.meta.env.VITE_API_KEY,
  },
});
