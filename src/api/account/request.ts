import { axiosInstance } from 'api/axios';
import {
  IRegisterRequest,
  IRegisterResponse,
  ILoginRequest,
  ILoginResponse,
  IResendEmailRequest,
  IResendEmailResponse,
  IResetPasswordResponse,
  IUserInfoResponse,
  IUpdateProfileRequest,
  IUpdatePasswordRequest,
  IResetPasswordRequest,
} from './types';

export const register = async (request: IRegisterRequest): Promise<IRegisterResponse> => {
  const { data } = await axiosInstance.post(`/user/register`, request);
  return data;
};

export const login = async (request: ILoginRequest): Promise<ILoginResponse> => {
  const { data } = await axiosInstance.post(`/user/login`, request);
  return data;
};

export const resendEmail = async (request: IResendEmailRequest): Promise<IResendEmailResponse> => {
  const { data } = await axiosInstance.post(`/user/resend-mail-active-user`, request);
  return data;
};

export const sendEmailResetPassword = async (request: IResendEmailRequest): Promise<IResetPasswordResponse> => {
  const { data } = await axiosInstance.post(`/user/send-mail-reset-password`, request);
  return data;
};

export const updateProfile = async (request: IUpdateProfileRequest): Promise<IUserInfoResponse> => {
  const { data } = await axiosInstance.post(`/user/update-profile`, request);
  return data;
};

export const updatePassword = async (request: IUpdatePasswordRequest): Promise<IUserInfoResponse> => {
  const { data } = await axiosInstance.post(`/user/update-password`, request);
  return data;
};

export const logout = async (): Promise<IRegisterResponse> => {
  const { data } = await axiosInstance.post(`/user/logout`);
  return data;
};

export const resetPassword = async (request: IResetPasswordRequest): Promise<IUserInfoResponse> => {
  const { data } = await axiosInstance.post(`/user/reset-password`, request);
  return data;
};
