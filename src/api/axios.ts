import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { routesEnum } from 'pages/Routes';
import { LOCAL_STORAGE } from 'utils/constant';
import { IError, ISuccessResponse } from './types';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  withCredentials: false,
});

const handleSuccess = (res: AxiosResponse<ISuccessResponse>) => {
  if (res.data?.meta.code < 200 && res.data?.meta.code > 299) {
    return Promise.reject(res.data);
  }
  return res.data;
};

const handleError = (err: AxiosError<IError>) => {
  //we not redirect when request is login api
  if (err?.response?.data.meta.code === 401 && err.config.url !== '/user/login') {
    localStorage.removeItem(LOCAL_STORAGE.token);
    window.location.href = routesEnum.home;
  }
  const data = err?.response?.data;
  return Promise.reject(data);
};

axiosInstance.interceptors.response.use(handleSuccess, handleError);

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE.token)}`,
      },
      data: config.data,
    };

    return config;
  },
  (error) => Promise.reject(error)
);
