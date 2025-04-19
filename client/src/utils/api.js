import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: `${API_BASE_URL}`, // change this if you're deploying
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
