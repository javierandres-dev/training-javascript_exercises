import { FC } from 'react';

type Props = {
  instructions: string;
  status: string;
};

const SolFooter: FC<Props> = ({ instructions, status }) => {
  return (
    <footer className='card-footer'>
      <h3>{instructions}</h3>
      <h4 className='t-center'>{status}</h4>
    </footer>
  );
};

export default SolFooter;
