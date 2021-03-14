import React, { useState } from 'react';
import { Form, Label, Input } from './Elements';
import SolFooter from './SolFooter';

const Solution6 = () => {
  const [message, setMessage] = useState<string>(
    'Enter a year and press "RESULT" button.'
  );
  const [status, setStatus] = useState<string>('☝️ Waiting for you');
  const [year, setYear] = useState<number | undefined>(undefined);

  const handleChange = (e: any): void => {
    setYear(parseInt(e.nativeEvent.target.value));
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (year === undefined) {
      setMessage('All fields are required');
      setStatus('⚠️ Warning');
    } else {
      if (year % 400 === 0) {
        setMessage(`Yes, ${year} is leap year`);
        setStatus('✔️ Done!');
      } else {
        if (year % 4 === 0 && year % 100 !== 0) {
          setMessage(`Yes, ${year} is leap year`);
          setStatus('✔️ Done!');
        } else {
          setMessage(`No, ${year} isn't leap year`);
          setStatus('✔️ Done!');
        }
      }
    }
  };
  return (
    <>
      <div className='card-body'>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor='year' content='Enter a year' />
          <Input
            id='year'
            type='number'
            name='year'
            placeholder='e.g. 1976'
            onChange={(e) => handleChange(e)}
          />
        </Form>
      </div>
      <SolFooter message={message} status={status} />
    </>
  );
};

export default Solution6;
