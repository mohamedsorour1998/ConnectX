import axios from "axios";
import { loadToken } from "./auth";

const api = axios.create({
  baseURL:
    "http://af5e57bee47ad41089d3c3e74ece4518-1229882055.us-east-1.elb.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to attach the JWT token to the authorization header
api.interceptors.request.use(
  (config) => {
    const token = loadToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
