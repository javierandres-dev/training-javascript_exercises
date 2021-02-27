import { FC, Dispatch, SetStateAction } from 'react';

type Props = {
  setMessage: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<string>>;
};

const Solution3: FC<Props> = ({ setMessage, setStatus }) => {
  setMessage('This exercise does not require user interaction.');
  setStatus('✔️ Done!');
  return <div className='card-body'>{new Date().toLocaleDateString()}</div>;
};

export default Solution3;
