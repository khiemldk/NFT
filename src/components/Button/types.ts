import React from 'react';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'info' | 'default' | 'error' | 'success' | 'disabled' | 'link';
  size?: 'large' | 'middle' | 'small';
  shape?: 'circle' | 'round';
  onClick?(): void;
  className?: string;
  htmlType?: 'submit' | 'button' | 'reset';
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  id?: any;
  href?: string;
}
