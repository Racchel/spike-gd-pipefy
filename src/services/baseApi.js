import axios from "axios";

export const api = axios.create({
  timeout: 600000,
  responseType: "json",
  headers: { "Content-Type": "application/json" },
});
