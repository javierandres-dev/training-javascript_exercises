import { FC, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Solution1 from './Solution1';
import Solution2 from './Solution2';
import Solution3 from './Solution3';
import Solution4 from './Solution4';
import Solution5 from './Solution5';
import Solution6 from './Solution6';
import Solution7 from './Solution7';
import Solution8 from './Solution8';
import Soon from './Soon';

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
  } else if (exercise === 5) {
    content = <Solution5 />;
  } else if (exercise === 6) {
    content = <Solution6 />;
  } else if (exercise === 7) {
    content = <Solution7 />;
  } else if (exercise === 8) {
    content = <Solution8 />;
  } else {
    content = <Soon />;
  }

  return <Fragment>{content}</Fragment>;
};

export default SolContent;
