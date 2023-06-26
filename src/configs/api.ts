import { clearLocalStorage } from '@/core/helpers/localStorage';
import { clearSession, getSessionItem } from '@/core/helpers/session';
import axios, { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {},
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = getSessionItem('@HP-Token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      clearLocalStorage();
      clearSession();
      window.location.href = '/login';
    }
  },
);

export { api };
