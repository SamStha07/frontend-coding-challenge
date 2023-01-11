import axios from 'axios';
import { API_BASE_URL } from 'constant';

export const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const accessToken = getUserToken();
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//       config.headers['Accept-language'] =
//         typeof window !== 'undefined' && window.localStorage.getItem(queryKeys?.locale);
//       return config;
//     }

//     config.headers['Accept-language'] =
//       typeof window !== 'undefined' && window.localStorage.getItem(queryKeys?.locale);

//     return config;
//   },
//   (error) => Promise.reject(error),
// );
