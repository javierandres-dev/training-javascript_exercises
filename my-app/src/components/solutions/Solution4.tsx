import React, { FC, useState, Fragment } from 'react';
import { Form } from './Elements';
import SolFooter from './SolFooter';

const Solution4: FC = () => {
  const [message, setMessage] = useState<string>(
    'Enter the three side lengths and press "RESULT" button.'
  );
  const [status, setStatus] = useState<string>('☝️ Waiting for you');
  const [num1, setNum1] = useState<number | undefined>(undefined);
  const [num2, setNum2] = useState<number | undefined>(undefined);
  const [num3, setNum3] = useState<number | undefined>(undefined);

  const processForm = (e: React.SyntheticEvent): void => {
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
  return (
    <Fragment>
      <div className='card-body'>
        <Form handleSubmit={processForm}>
          <label htmlFor='num1'>Enter first side length</label>
          <input
            id='num1'
            type='number'
            value={num1}
            placeholder='e.g. 2'
            onChange={(e) => setNum1(parseInt(e.currentTarget.value))}
          />
          <label htmlFor='num2'>Enter second side length</label>
          <input
            id='num2'
            type='number'
            value={num2}
            placeholder='e.g. 3'
            onChange={(e) => setNum2(parseInt(e.currentTarget.value))}
          />
          <label htmlFor='num3'>Enter third side length</label>
          <input
            id='num3'
            type='number'
            value={num3}
            placeholder='e.g. 4'
            onChange={(e) => setNum3(parseInt(e.currentTarget.value))}
          />
        </Form>
      </div>
      <SolFooter message={message} status={status} />
    </Fragment>
  );
};

export default Solution4;
