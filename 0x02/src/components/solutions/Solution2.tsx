import { FC, useState, Fragment } from 'react';
import { Button } from './Elements';
import SolFooter from './SolFooter';

const Solution2: FC = () => {
  const [status, setStatus] = useState<string>('☝️ Waiting for you'),
    message: string = 'Press "PRINT" button.';
  return (
    <Fragment>
      <div className='card-body'>
        <Button
          type='button'
          content='PRINT'
          onClick={() => {
            window.print();
            setStatus('✔️ Done');
          }}
        />
      </div>
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution2;
