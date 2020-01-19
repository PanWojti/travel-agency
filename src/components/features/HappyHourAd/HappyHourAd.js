import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {

  static defaultProps = {
    title: 'Happy Hour',
    description:
      'Its your time! Take advantage of Happy Hour! All offers 20% off!',
  };

  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => this.forceUpdate(), 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render(){
    const {title, description} = this.props;
    const countdownTime = this.getCountdownTime();
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        {countdownTime > 23*60*60 ?
          <div className={styles.promoDescription}>{description}</div>
          :
          <div className="promoDescription">{this.getCountdownTime()}</div>}
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default HappyHourAd;
