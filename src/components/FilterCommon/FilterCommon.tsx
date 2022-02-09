import { Checkbox, Col, Row } from 'antd';
import clsx from 'clsx';
import { CheckBoxCommon } from 'components/CheckBoxCommon';
import { InputCommon } from 'components/InputCommon';
import { SelectCommon } from 'components/SelectCommon';
import { FC } from 'react';
import styles from './FilterCommon.module.css';
import FilterIcon from 'assets/images/FilterIcon.png';

const listSelect = [
  { value: 'eth', text: 'ETH' },
  { value: 'btc', text: 'BTC' },
  { value: 'sol', text: 'SOL' },
];

const listType = [
  { value: 1, text: 'Type A' },
  { value: 2, text: 'Type B' },
  { value: 3, text: 'Type C' },
  { value: 4, text: 'Type D' },
];

const listBrand = [
  { value: 1, text: 'Brand A' },
  { value: 2, text: 'Brand B' },
  { value: 3, text: 'Brand C' },
  { value: 4, text: 'Brand E' },
];

export const FilterCommon: FC = () => {
  return (
    <Col xs={24} md={6} className={styles.root}>
      <div
        className={clsx(styles.filterTitle, 'd-flex align-items-top justify-content-md-start justify-content-center')}
      >
        <img className="me-2" alt="filter" src={FilterIcon} /> FILTER
      </div>
      <h5 className={clsx(styles.typeFilter, 'text-md-start text-center my-4')}>Type</h5>
      <Checkbox.Group className="w-100 mb-3">
        <Row>
          {listType.map((item, index) => (
            <Col md={24} xs={12} className="text-md-start text-center" key={index}>
              <CheckBoxCommon item={item} />
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
      <h5 className={clsx(styles.typeFilter, 'text-md-start text-center my-4')}>Price</h5>
      <SelectCommon list={listSelect} />
      <div className={clsx(styles.listInput, 'd-flex my-4')}>
        <InputCommon classInput="me-2" placeholder="MIN" />
        <InputCommon classInput="" placeholder="MAX" />
      </div>
      <CheckBoxCommon item={{ value: false, text: 'Show Only Listed for Sale' }} />
      <h5 className={clsx(styles.typeFilter, 'text-md-start text-center my-4')}>Brand</h5>
      <Checkbox.Group className="w-100 mb-3">
        <Row>
          {listBrand.map((item, index) => (
            <Col md={24} xs={12} className="text-md-start text-center" key={index}>
              <CheckBoxCommon item={item} />
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </Col>
  );
};
