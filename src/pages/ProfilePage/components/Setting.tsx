import { Col, DatePicker, Form, Input, message, Typography } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import { FC } from 'react';
import styles from './Setting.module.less';
import { IError } from 'api/types';
import { useMutation } from 'react-query';
import { IUpdateProfileRequest, updateProfile, useGetUserInfo } from 'api/account';
import moment from 'moment';

const { Paragraph, Title } = Typography;

export const Setting: FC = () => {
  const { data: userInfo, refetch } = useGetUserInfo();

  const { mutate: mutateUpdateProfile, status } = useMutation(updateProfile, {
    onSuccess: () => {
      refetch();
      message.success('Update Profile successfully');
    },
    onError: (error: IError) => {
      message.error(error.meta.message);
    },
  });

  const onFinish = (value: any) => {
    const updateProfileRequest: IUpdateProfileRequest = {
      ...value,
      dateOfBirth: value['dateOfBirth'].format('YYYY-MM-DD'),
    };
    mutateUpdateProfile(updateProfileRequest);
  };

  return (
    <Col xs={24} md={9} className={clsx(styles.root, 'ps-md-4 pe-md-0 px-3')}>
      <Title level={2} className={clsx(styles.title, 'text-center text-md-start')}>
        SETTING
      </Title>
      <Paragraph className={styles.emailLogin}>
        You have signed up using: <strong>{userInfo?.email}</strong>
      </Paragraph>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item className="mb-3" label="First Name" name="firstName" initialValue={userInfo?.firstName}>
          <Input className="py-2" />
        </Form.Item>
        <Form.Item className="mb-3" label="Last Name" name="lastName" initialValue={userInfo?.lastName}>
          <Input className="py-2" />
        </Form.Item>
        <Form.Item className="mb-3" label="Phone" name="phone" initialValue={userInfo?.phone}>
          <Input className="py-2" type="number" />
        </Form.Item>
        <Form.Item
          className="mb-3"
          label="Date Of Birth"
          name="dateOfBirth"
          initialValue={moment(userInfo?.dateOfBirth, 'YYYY-MM-DD')}
        >
          <DatePicker className="py-2 w-100" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item className={'my-4'}>
          <Button loading={status === 'loading'} className="w-100" htmlType={'submit'}>
            SAVE
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
