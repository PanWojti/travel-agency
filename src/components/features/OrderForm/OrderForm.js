import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PageTitle from '../../common/PageTitle/PageTitle.js';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderForm = props => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderSummary tripCost={props.tripCost} options={props.options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
