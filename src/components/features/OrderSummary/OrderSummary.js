import React from 'react';
import PropTypes from 'prop-types';
//import PageTitle from '../../common/PageTitle/PageTitle.js';
import styles from './OrderSummary.scss';
//import {Grid, Row, Col} from 'react-flexbox-grid';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = props => (
  <h2 className={styles.component}>Total: <strong>{calculateTotal(formatPrice(props.tripCost), props.options)}</strong></h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
