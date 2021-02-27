import { FC, Fragment, Dispatch, SetStateAction } from 'react';
import Solution1 from './Solution1';
import Solution2 from './Solution2';
import Solution3 from './Solution3';
import Solution4 from './Solution4';

type Props = {
  exercise: number;
  setMessage: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<string>>;
};

const SolContent: FC<Props> = ({ exercise, setMessage, setStatus }) => {
  let content = undefined;
  if (exercise === 1) {
    content = <Solution1 setMessage={setMessage} setStatus={setStatus} />;
  } else if (exercise === 2) {
    content = <Solution2 setMessage={setMessage} setStatus={setStatus} />;
  } else if (exercise === 3) {
    content = <Solution3 setMessage={setMessage} setStatus={setStatus} />;
  } else if (exercise === 4) {
    content = <Solution4 setMessage={setMessage} setStatus={setStatus} />;
  } else {
    content = null;
  }

  return <Fragment>{content}</Fragment>;
};

export default SolContent;
