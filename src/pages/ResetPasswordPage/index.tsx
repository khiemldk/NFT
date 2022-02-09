import { Col, Form, Input, message, Row, Typography } from 'antd';
import clsx from 'clsx';
import { HeaderTitle } from 'components/HeaderTitle';
import { FC } from 'react';
import styles from './styles.module.less';
import { Button } from 'components/Button';
import { IResetPasswordRequest, resetPassword } from 'api/account';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { routesEnum } from 'pages/Routes';
import { IError } from 'api/types';
import { usePathQuery } from 'hooks/usePathQuery';

const { Paragraph } = Typography;

const ResetPasswordPage: FC = () => {
  const history = useHistory();
  const query = usePathQuery();

  const { mutate: mutateResetPassword, status } = useMutation(resetPassword, {
    onSuccess: () => {
      history.push(routesEnum.home);
    },
    onError: (error: IError) => {
      message.error(error.meta.message);
    },
  });

  const onResetPassword = (value: any) => {
    const resetPasswordRequest: IResetPasswordRequest = { ...value, token: query.get('code') };
    mutateResetPassword(resetPasswordRequest);
  };

  return (
    <div className={clsx(styles.root, 'container-fluid')}>
      <HeaderTitle title="RESET PASSWORD" className="mt-5" />
      <Row justify="center" className="mt-3">
        <Col md={8} xs={24}>
          <Form layout="vertical" onFinish={onResetPassword}>
            <Form.Item className="mb-3" label="New Password" name="password">
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
                RESET PASSWORD
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPasswordPage;
