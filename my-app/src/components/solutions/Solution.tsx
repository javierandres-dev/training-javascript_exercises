import React, { FC, Dispatch, SetStateAction, Fragment } from 'react';
import Solution1 from './Solution1';

type Props = {
  exercise: number;
  setStatus: Dispatch<SetStateAction<string | undefined>>;
};

const Solution: FC<Props> = ({ exercise, setStatus }) => {
  let component = undefined;
  if (exercise === 1) {
    component = <Solution1 setStatus={setStatus} />;
  }

  return <Fragment>{component}</Fragment>;
};

export default Solution;
