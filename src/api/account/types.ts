export interface IRegisterRequest {
  email: string;
  password: string;
}
export interface IRegisterResponse {
  email: string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}
export interface ILoginResponse {
  id: Number;
  username: string;
  email: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  isActive2fa: Number;
  wallet: string;
  status: string;
  data: any;
  token: string;
  isActiveKyc: Number;
}
export interface IResendEmailRequest {
  email: string;
}
export interface IResendEmailResponse {
  email: string;
}
export interface IResetPasswordRequest {
  token: string;
  password: string;
}
export interface IResetPasswordResponse {
  id: Number;
  username: string;
  email: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  isActive2fa: Number;
  wallet: string;
  status: string;
  data: any;
}
export interface IUserInfoResponse {
  id: Number;
  username: string;
  email: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  isActive2fa: Number;
  wallet: string;
  status: string;
  data: any;
  token: string;
  isActiveKyc: Number;
}
export interface IUpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  phone?: string;
}

export interface IUpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
