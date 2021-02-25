import { FC, Fragment } from 'react';
import SolFooter from './SolFooter';
import Button from './Button';

const Solution2: FC = () => {
  return (
    <Fragment>
      <div className='card-body'>
        <Button content='PRINT' />
      </div>
      <SolFooter
        instructions='This exercise does not require user interaction.'
        status={'✔️ Done!'}
      />
    </Fragment>
  );
};

export default Solution2;
