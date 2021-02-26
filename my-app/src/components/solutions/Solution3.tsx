import { FC, Fragment } from 'react';
import SolFooter from './SolFooter';

const Solution3: FC = () => {
  return (
    <Fragment>
      <div className='card-body'>{new Date().toLocaleDateString()}</div>
      <SolFooter
        message='This exercise does not require user interaction'
        status={'✔️ Done'}
      />
    </Fragment>
  );
};

export default Solution3;
