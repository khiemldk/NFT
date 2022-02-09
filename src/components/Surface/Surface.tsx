import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export interface SurfaceProps {
  className?: string;
  borderSm?: boolean;
  borderMd?: boolean;
  style?: React.CSSProperties;
  filled?: boolean;
  borderLess?: boolean;
}

export const Surface: React.FC<SurfaceProps> = ({
  borderSm,
  borderMd,
  borderLess,
  className,
  children,
  filled = false,
  style,
}) => {
  return (
    <div
      className={clsx(
        styles.surface,
        borderSm && styles.border__1x,
        borderMd && styles.border__2x,
        filled && styles.filledBackgroud,
        borderLess && styles.borderLess,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

Surface.defaultProps = {};
