import { FC, Fragment } from 'react';
import SolFooter from './SolFooter';

const Soon: FC = () => {
  return (
    <Fragment>
      <div className='card-body'>. . .</div>
      <SolFooter message={'Coming soon.'} status={'🔜'} />
    </Fragment>
  );
};

export default Soon;
