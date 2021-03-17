import React, { useState } from 'react';
import { Form, Label, Input } from './Elements';
import SolFooter from './SolFooter';

const Solution6 = () => {
  const [randomNum, setRandomNum] = useState<number | undefined>(undefined);
  console.log(randomNum);
  const [message, setMessage] = useState<string>(
    'Enter a number between 1 to 10 and press "RESULT" button.'
  );
  const [status, setStatus] = useState<string>('☝️ Waiting for you');
  const [num, setNum] = useState<number | undefined>(undefined);

  const handleChange = (e: any): void => {
    setNum(parseInt(e.nativeEvent.target.value));
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (num === undefined) {
      setMessage('All fields are required');
      setStatus('⚠️ Warning');
    } else {
      if (num < 1 || num > 10) {
        setMessage('Enter a number between 1 to 10');
        setStatus('⚠️ Warning');
        return;
      }
      if (num === randomNum) {
        setMessage('Good Work');
        setStatus('✔️ Done!');
      } else {
        setMessage(`${num} Not matched, enter other number`);
        setStatus('⚠️ Try again');
      }
    }
    setRandomNum(Math.floor(Math.random() * 10 + 1));
  };
  return (
    <>
      <div className='card-body'>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor='num' content='Enter a number' />
          <Input
            id='num'
            type='number'
            name='num'
            placeholder='e.g. 8'
            onChange={(e) => handleChange(e)}
          />
        </Form>
      </div>
      <SolFooter message={message} status={status} />
    </>
  );
};

export default Solution6;
