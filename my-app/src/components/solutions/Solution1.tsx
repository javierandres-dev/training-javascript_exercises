import React, { Fragment } from 'react';
import { getWeekDays } from '../../helpers/auxiliar';

const Solution1: React.FC = () => {
  const weekDays = getWeekDays(),
    date = new Date(),
    day = date.getDay(),
    getHours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  let hours = undefined;
  let period = undefined;
  if (getHours >= 0 && getHours <= 12) {
    hours = getHours;
    period = 'AM';
  } else {
    hours = getHours - 12;
    period = 'PM';
  }
  return (
    <Fragment>
      <div className='card-body'>
        <p>Today is: {weekDays[day]}</p>
        <p>
          {hours < 10 ? '0' + hours : hours} {period} :
          {minutes < 10 ? '0' + minutes : minutes} :
          {seconds < 10 ? '0' + seconds : seconds}
        </p>
      </div>
      <footer className='card-footer'>
        <h3>This exercise does not require user interaction.</h3>
      </footer>
    </Fragment>
  );
};

export default Solution1;
