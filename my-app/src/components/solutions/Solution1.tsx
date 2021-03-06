import { FC, Fragment } from 'react';
import SolFooter from './SolFooter';

const Solution1: FC = () => {
  const weekDays: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    date: Date = new Date(),
    day: number = date.getDay(),
    getHours: number = date.getHours(),
    minutes: number = date.getMinutes(),
    seconds: number = date.getSeconds();
  let hours: number | undefined = undefined;
  let period: string | undefined = undefined;
  if (getHours >= 0 && getHours <= 12) {
    hours = getHours;
    period = 'AM';
  } else {
    hours = getHours - 12;
    period = 'PM';
  }
  const message: string = 'This exercise does not require user interaction.';
  const status: string = '✔️ Done!';
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
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution1;
