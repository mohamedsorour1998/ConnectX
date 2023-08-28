import axios from "axios";
import { loadToken } from "./auth";

const api = axios.create({
  baseURL:
    "http://aa2809da0a6cb45779dd895d24e4d8bc-230234518.us-east-1.elb.amazonaws.com",
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
