import { IUserInfoResponse } from 'api/account';
import { axiosInstance } from 'api/axios';
import { useQuery, UseQueryOptions } from 'react-query';

export const useGetUserInfo = (options?: UseQueryOptions<IUserInfoResponse>) => {
  return useQuery<IUserInfoResponse>(
    'user/info-user',
    async () => {
      const { data } = await axiosInstance.get(`/user/info-user`);
      return data;
    },
    options
  );
};
