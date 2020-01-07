import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PageTitle from '../../common/PageTitle/PageTitle.js';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => (
  <Grid>
    <PageTitle text='Trip options' />
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption {...option}
            currentValue={props.options[option.id]}
            setOrderOption={props.setOrderOption}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  currentValue: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
