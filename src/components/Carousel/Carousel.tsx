import { Children, FC, useMemo, useRef } from 'react';
import styles from './Carousel.module.css';
import { Button, Carousel as AntdCarousel, CarouselProps as AntdCarouselProps } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/lib/carousel';
import { CSSProperties } from 'react';
import clsx from 'clsx';
import { useState } from 'react';

type CarouselProps = AntdCarouselProps & {
  autoPlay?: boolean;
  className?: string;
  styles?: CSSProperties;
  onChange?: (activeIndex: number) => void;
};

export const Carousel: FC<CarouselProps> = ({ onChange, className, children, ...props }) => {
  const carouselRef = useRef<CarouselRef>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const numOfChildren = useMemo(() => {
    return Children.count(children);
  }, [children]);

  const goNext = () => {
    carouselRef.current?.next();
  };

  const goPrev = () => {
    carouselRef.current?.prev();
  };

  const carouselProps = {
    beforeChange: (_: number, next: number) => {
      setActiveIdx(next);
      if (onChange) onChange(next);
    },
    ...props,
    dots: false,
  };

  const handleDotClick = (idx: number) => {
    carouselRef.current?.goTo(idx);
    setActiveIdx(idx);
  };

  if (numOfChildren === 0) return null;

  return (
    <div className={clsx(styles.carouselContainer, className)}>
      <Button icon={<LeftOutlined />} shape="circle" type="text" size="large" onClick={goPrev} className="primary" />
      <div className={styles.carousel}>
        <AntdCarousel ref={carouselRef} {...carouselProps}>
          {children}
        </AntdCarousel>

        {props.dots && (
          <div className={styles.dotWrapper}>
            {Array.from(Array(numOfChildren).keys()).map((dotIdx) => (
              <div
                onClick={() => handleDotClick(dotIdx)}
                className={clsx(styles.dot, activeIdx === dotIdx && styles.dotActive)}
                key={dotIdx}
              />
            ))}
          </div>
        )}
      </div>
      <Button icon={<RightOutlined />} shape="circle" type="text" size="large" onClick={goNext} className="primary" />
    </div>
  );
};
