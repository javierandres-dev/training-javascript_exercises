import { FC, Fragment } from 'react';
import { Button } from './Elements';
import SolFooter from './SolFooter';

const Solution2: FC = () => {
  const message: string = 'Press "PRINT" button.';
  const status: string = '✔️ Done';
  return (
    <Fragment>
      <div className='card-body'>
        <Button
          type='button'
          content='PRINT'
          handleClick={() => window.print()}
        />
      </div>
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution2;
