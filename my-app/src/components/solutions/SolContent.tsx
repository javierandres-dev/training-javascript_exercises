import { FC, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Solution1 from './Solution1';
import Solution2 from './Solution2';
import Solution3 from './Solution3';
import Solution4 from './Solution4';

type Props = {
  exercise: number;
};

const SolContent: FC<Props> = ({ exercise }) => {
  let content = undefined;
  if (exercise === 0) {
    return <Redirect to='/' />;
  } else if (exercise === 1) {
    content = <Solution1 />;
  } else if (exercise === 2) {
    content = <Solution2 />;
  } else if (exercise === 3) {
    content = <Solution3 />;
  } else if (exercise === 4) {
    content = <Solution4 />;
  }

  return <Fragment>{content}</Fragment>;
};

export default SolContent;
