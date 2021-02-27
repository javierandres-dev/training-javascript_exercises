import { FC, Dispatch, SetStateAction } from 'react';
import { Form, Label, Input } from './Elements';

type Props = {
  setMessage: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<string>>;
};

const Solution4: FC<Props> = ({ setMessage, setStatus }) => {
  setMessage('Enter the three side lengths and press "RESULT" button.');
  setStatus('Waiting');
  const processForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('working...');
    setStatus('✔️ Done!');
  };
  return (
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
  );
};

export default Solution4;
