import { FC, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { BoxMarketPlace } from 'components/BoxMarketPlace';
import clsx from 'clsx';
import { Col, Row, Pagination } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { SelectCommon } from 'components/SelectCommon';
import { InputCommon } from 'components/InputCommon';
import { SearchOutlined } from '@ant-design/icons';
import { FilterCommon } from 'components/FilterCommon';
import { Button } from 'components/Button';
import { usePathQuery } from 'hooks/usePathQuery';

const LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LIST_MENU = [
  { title: 'Trending' },
  { title: 'Top' },
  { title: 'Art' },
  { title: 'Collectibles' },
  { title: 'Domain Name' },
  { title: 'Music' },
];

const LIST_SELECT = [
  { value: 'eth', text: 'ETH' },
  { value: 'btc', text: 'BTC' },
  { value: 'sol', text: 'SOL' },
];

const MarketPlacePage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState(1);

  const history = useHistory();
  const { tab } = useParams<{ tab: string }>();
  const query = usePathQuery();

  useEffect(() => {
    setType(Number(tab));
  }, [tab]);

  useEffect(() => {
    setCurrentPage(Number(query.get('page')) === 0 ? 1 : Number(query.get('page')));
  }, [query]);

  const onChangePagination = (index: Number) => {
    history.push(`/marketplace/${type}?page=${index}`);
  };

  return (
    <div className={styles.root}>
      <h2 className={clsx(styles.marketplaceTitle, 'text-center')}>MARKETPLACE</h2>
      <div className="text-center">
        <div className="d-flex justify-content-center flex-wrap">
          {LIST_MENU.map((item, index) => (
            <div
              key={index}
              className={clsx(
                styles.menuMarketItem,
                index + 1 === type && styles.activeMarketMenu,
                'text-center py-2 m-2 pointer'
              )}
              onClick={() => history.push(`/marketplace/${index + 1}?page=1`)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <Row className="my-5">
        <FilterCommon />
        <Col xs={24} md={18}>
          <Row className="mb-4">
            <Col xs={24} md={8} className="pe-md-3 me-md-2 mb-3">
              <InputCommon classInput="me-2" placeholder="Search" prefix={<SearchOutlined />} />
            </Col>
            <Col xs={24} md={8} className="pe-md-3 me-md-2 mb-3">
              <SelectCommon classSelectBox="w-100" list={LIST_SELECT} />
            </Col>
            <Col xs={24} md={8} className={clsx(styles.customPreNext, 'pe-md-3 mb-33 text-end')}>
              1/100 <Button className={styles.customBtnPre}>{'<'}</Button>
              <Button className={styles.customBtnNext}>{'>'}</Button>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            {LIST.map((item, index) => (
              <BoxMarketPlace key={index} onClick={() => history.push(`/nft-detail/${index}`)} />
            ))}
          </Row>
          <Pagination
            className={clsx(styles.customPagination, 'customPagination text-center mt-5')}
            current={currentPage}
            pageSize={10}
            total={500}
            showSizeChanger={false}
            onChange={onChangePagination}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MarketPlacePage;
