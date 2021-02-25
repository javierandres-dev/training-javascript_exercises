import React, { Fragment } from 'react';
import Solution1 from './Solution1';

type Props = {
  exercise: number;
};

const Solution: React.FC<Props> = ({ exercise }) => {
  let component = undefined;
  if (exercise === 1) {
    component = <Solution1 />;
  }

  return <Fragment>{component}</Fragment>;
};

export default Solution;
