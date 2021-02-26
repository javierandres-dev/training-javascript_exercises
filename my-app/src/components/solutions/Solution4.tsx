import { FC, Fragment } from 'react';
import SolFooter from './SolFooter';

const Solution4: FC = () => {
  return (
    <Fragment>
      <div className='card-body'>... form ...</div>
      <SolFooter
        instructions='This exercise does not require user interaction'
        status={'✔️ Done'}
      />
    </Fragment>
  );
};

export default Solution4;
