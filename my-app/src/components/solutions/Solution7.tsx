import React, { Fragment } from 'react';
import SolFooter from './SolFooter';

const Solution7: React.FC = () => {
  const message: string = 'This exercise does not require user interaction.',
    status: string = '✔️ Done!';
  const arr: number[] = [],
    end = 2050;
  let start = 2014;
  while (start <= end) {
    const date = new Date(start, 0, 1),
      day = date.getDay();
    if (day === 0) {
      arr.push(date.getFullYear());
    }
    start++;
  }

  return (
    <Fragment>
      <p className='t-center'>Sunday 1st January on years: {arr.join(', ')}.</p>
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution7;
