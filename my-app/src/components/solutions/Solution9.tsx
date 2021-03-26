import React, { Fragment } from 'react';
import SolFooter from './SolFooter';

const Solution9: React.FC = () => {
  const message: string = 'This exercise does not require user interaction.',
    status: string = '✔️ Done!',
    today = new Date().getTime(),
    year = new Date().getFullYear(),
    nextChristmas = new Date(year, 11, 25).getTime(),
    difference = nextChristmas - today,
    remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  return (
    <Fragment>
      <p className='t-center'>{remainingDays} days until next Christmas</p>
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution9;
