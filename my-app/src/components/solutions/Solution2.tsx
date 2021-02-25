import { Component, Fragment } from 'react';
import SolFooter from './SolFooter';
import { Button } from './Elements';

export default class Solution2 extends Component {
  render() {
    return (
      <Fragment>
        <div className='card-body'>
          <Button content='PRINT' clickHandler={() => window.print()} />
        </div>
        <SolFooter
          instructions='Press "PRINT" button'
          status={'✔️ All ready'}
        />
      </Fragment>
    );
  }
}
