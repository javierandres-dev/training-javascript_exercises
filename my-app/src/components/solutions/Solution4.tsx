import { FC, Fragment } from 'react';
import SolFooter from './SolFooter';
import { Form, Label, Input } from './Elements';

const Solution4: FC = () => {
  let status: string = '⚠️ Waiting';
  const processForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('working...');
    status = '✔️ Done';
  };
  return (
    <Fragment>
      <div className='card-body'>
        <Form handleSubmit={processForm}>
          <Label content={'Enter first side length'} />
          <Input type={'number'} placeholder={'e.g. 2'} />
          <Label content={'Enter second side length'} />
          <Input type={'number'} placeholder={'e.g. 3'} />
          <Label content={'Enter third side length'} />
          <Input type={'number'} placeholder={'e.g. 4'} />
        </Form>
      </div>
      <SolFooter
        message='Enter the three side lengths and press "RESULT" button.'
        status={status}
      />
    </Fragment>
  );
};

export default Solution4;
