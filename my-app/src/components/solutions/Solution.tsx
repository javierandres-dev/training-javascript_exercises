import React from 'react';
import Solution1 from './Solution1';

type Props = {
  exercise: number;
};

const Solution: React.FC<Props> = ({ exercise }) => {
  let component = undefined;
  if (exercise === 1) {
    component = <Solution1 />;
  }

  return <aside>{component}</aside>;
};

export default Solution;
