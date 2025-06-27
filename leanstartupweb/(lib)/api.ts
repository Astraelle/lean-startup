// lib/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://charlie-pierre.com/leanstartupservices/api',
});

API.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `bearer ${token}`;
    }
  }
  return config;
});

export default API;
