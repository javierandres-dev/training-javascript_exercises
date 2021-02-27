import { FC, Fragment } from 'react';
import SolFooter from './SolFooter';

const Solution3: FC = () => {
  const message: string = 'This exercise does not require user interaction.';
  const status: string = '✔️ Done!';
  return (
    <Fragment>
      <div className='card-body'>{new Date().toLocaleDateString()}</div>{' '}
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution3;
