import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../common/Icon/Icon';
//import PageTitle from '../../common/PageTitle/PageTitle.js';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icon}>
    {required ? values.map(value =>
      (<div
        className={value.id === currentValue ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>)
    ) : (
      <div
        className={styles.icon}
        onClick={() => setOptionValue('')}
      >
        <Icon name='times-circle' />
        none
      </div>
    )}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
