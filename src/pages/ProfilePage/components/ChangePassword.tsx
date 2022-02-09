import { Col, Form, Input, message, Typography } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import { FC } from 'react';
import styles from './Setting.module.less';
import { IError } from 'api/types';
import { useMutation } from 'react-query';
import { IUpdatePasswordRequest, updatePassword } from 'api/account';

const { Paragraph, Title } = Typography;

export const ChangePassword: FC = () => {
  const { mutate: mutateUpdatePassword, status } = useMutation(updatePassword, {
    onSuccess: () => {
      message.success('Update Password successfully');
    },
    onError: (error: IError) => {
      message.error(error.meta.message);
    },
  });

  const onFinish = (value: any) => {
    const updatePasswordRequest: IUpdatePasswordRequest = { ...value };
    mutateUpdatePassword(updatePasswordRequest);
  };

  return (
    <Col xs={24} md={9} className={clsx(styles.root, 'ps-md-4 pe-md-0 px-3')}>
      <Title level={2} className={clsx(styles.title, 'text-center text-md-start')}>
        CHANGE PASSWORD
      </Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item className="mb-3" label="Current Password" name="oldPassword">
          <Input.Password className="py-2" />
        </Form.Item>
        <Form.Item className="mb-3" label="News Password" name="newPassword">
          <Input.Password className="py-2" />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirmPassword">
          <Input.Password className="py-2" />
        </Form.Item>
        <Paragraph className={styles.definePass}>
          Password must be at least 8 characters and contain 1 special character or number.
        </Paragraph>
        <Form.Item className={'my-4'}>
          <Button loading={status === 'loading'} className="w-100" htmlType={'submit'}>
            CHANGE PASSWORD
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
