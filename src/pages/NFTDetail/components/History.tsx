import clsx from 'clsx';
import { HeaderTitle } from 'components/HeaderTitle';
import { FC, useState } from 'react';
import styles from './History.module.css';

export const History: FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={clsx(styles.root)}>
      <HeaderTitle />
      <h2 className={clsx(styles.titleHistory, 'text-center mb-4')}>
        <span className={clsx(active && styles.opacityText, 'pointer')} onClick={() => setActive(false)}>
          EDITION HISTORY
        </span>{' '}
        /{' '}
        <span className={clsx(!active && styles.opacityText, 'pointer')} onClick={() => setActive(true)}>
          RELEASE HISTORY
        </span>
      </h2>
      <div className="d-flex flex-wrap my-3">
        <div className={clsx('col-md-8 col-12 text-center text-md-start mb-2', styles.titleEditHistory)}>
          “Owne Namer” transferred” NFT Name #47” to @abc123xyz
        </div>
        <div className={clsx(styles.opacityText, 'col-md-4 col-12 text-center text-md-end')}>4 days, 18 hours ago</div>
      </div>
      <div className="d-flex flex-wrap my-3">
        <div className={clsx('col-md-8 col-12 text-center text-md-start mb-2', styles.titleEditHistory)}>
          “Owne Namer” transferred” NFT Name #47” to @abc123xyz
        </div>
        <div className={clsx(styles.opacityText, 'col-md-4 col-12 text-center text-md-end')}>4 days, 18 hours ago</div>
      </div>
      <div className="d-flex flex-wrap my-3">
        <div className={clsx('col-md-8 col-12 text-center text-md-start mb-2', styles.titleEditHistory)}>
          “Owne Namer” transferred” NFT Name #47” to @abc123xyz
        </div>
        <div className={clsx(styles.opacityText, 'col-md-4 col-12 text-center text-md-end')}>4 days, 18 hours ago</div>
      </div>
    </div>
  );
};
