import React from 'react';
import PropTypes from 'prop-types';
//import PageTitle from '../../common/PageTitle/PageTitle.js';
import styles from './OrderOption.scss';
//import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  console.log(otherProps);
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent {...otherProps} setOptionValue={value => setOrderOption({[id]: value})}/>
      </div>
    );
  }
};

OrderOption.propTypes = {
  option: PropTypes.object,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderOption;
