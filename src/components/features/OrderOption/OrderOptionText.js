import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionText = ({placeholder, setOptionValue}) => (
  <input
    type='text'
    className={styles.inputMedium}
    placeholder={placeholder}
    onChange={event => setOptionValue(event.currentTarget.value)}
  />
);

OrderOptionText.propTypes = {
  placeholder: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
