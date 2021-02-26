import { Component, Fragment } from 'react';
import SolFooter from './SolFooter';
import { Button } from './Elements';

export default class Solution2 extends Component {
  render() {
    return (
      <Fragment>
        <div className='card-body'>
          <Button
            type='button'
            content='PRINT'
            handleClick={() => window.print()}
          />
        </div>
        <SolFooter message='Press "PRINT" button' status={'✔️ All ready'} />
      </Fragment>
    );
  }
}
