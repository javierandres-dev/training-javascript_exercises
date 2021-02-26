import { FC } from 'react';

type Props = {
  message: string;
  status: string;
};

const SolFooter: FC<Props> = ({ message, status }) => {
  return (
    <footer className='card-footer'>
      <h3>{message}</h3>
      <h4 className='t-center'>{status}</h4>
    </footer>
  );
};

export default SolFooter;
