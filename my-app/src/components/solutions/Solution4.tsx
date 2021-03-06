import React, { FC, useState, useEffect, Fragment } from 'react';
import { Form, Label, Input } from './Elements';
import SolFooter from './SolFooter';

const Solution4: FC = () => {
  const [message, setMessage] = useState<string>(
    'Enter the three side lengths and press "RESULT" button.'
  );
  const [status, setStatus] = useState<string>('☝️ Waiting for you');
  const [num1, setNum1] = useState<number | undefined>(undefined);
  const [num2, setNum2] = useState<number | undefined>(undefined);
  const [num3, setNum3] = useState<number | undefined>(undefined);
  /*
useEffect(() => {
        console.log(message, status);
}
*/
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
      setMessage('All fields are required');
      setStatus('⚠️ Warning');
    } else {
      const perimeter = (num1 + num2 + num3) / 2,
        area = Math.sqrt(
          perimeter *
            (perimeter - num1) *
            (perimeter - num2) *
            (perimeter - num3)
        );
      if (isNaN(area)) {
        setMessage('Impossible triangle');
        setStatus('⚠️ Warning');
      } else {
        setMessage(`Area = ${area.toFixed(2)}`);
        setStatus('✔️ Done!');
      }
    }
  };

  const handleChange = (e: any) => {
    if (e.nativeEvent.target.id === 'num1') {
      setNum1(parseInt(e.nativeEvent.target.value));
    }
    if (e.nativeEvent.target.id === 'num2') {
      setNum2(parseInt(e.nativeEvent.target.value));
    }
    if (e.nativeEvent.target.id === 'num3') {
      setNum3(parseInt(e.nativeEvent.target.value));
    }
  };

  return (
    <Fragment>
      <div className='card-body'>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor='num1' content='Enter first side length' />
          <Input
            id='num1'
            type='number'
            name='num1'
            value={num1}
            placeholder='e.g. 2'
            onChange={(e) => handleChange(e)}
          />
          <Label htmlFor='num2' content='Enter second side length' />
          <Input
            id='num2'
            type='number'
            name='num2'
            value={num2}
            placeholder='e.g. 3'
            onChange={(e) => handleChange(e)}
          />
          <Label htmlFor='num3' content='Enter third side length' />
          <Input
            id='num3'
            type='number'
            name='num3'
            value={num3}
            placeholder='e.g. 4'
            onChange={(e) => handleChange(e)}
          />
        </Form>
      </div>
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution4;
