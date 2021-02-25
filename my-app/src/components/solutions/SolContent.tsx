import { FC, Fragment } from 'react';
import Solution1 from './Solution1';
import Solution2 from './Solution2';

type Props = {
  exercise: number;
};

const SolContent: FC<Props> = ({ exercise }) => {
  let content = undefined;
  if (exercise === 1) {
    content = <Solution1 />;
  } else if (exercise === 2) {
    content = <Solution2 />;
  } else {
    content = null;
  }

  return <Fragment>{content}</Fragment>;
};

export default SolContent;
