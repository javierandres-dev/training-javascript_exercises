import { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import SolHeader from './solutions/SolHeader';
import SolContent from './solutions/SolContent';
import SolFooter from './solutions/SolFooter';

type Props = {
  title: string;
  exercise: number;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
};

const Exercise: FC<Props> = ({
  title,
  exercise,
  message,
  setMessage,
  status,
  setStatus,
}) => {
  return (
    <main role='main' className='container'>
      <Link to='/' className='link-back'>
        Back
      </Link>
      <section className='card'>
        <SolHeader title={title} exercise={exercise} />
        <SolContent
          exercise={exercise}
          setMessage={setMessage}
          setStatus={setStatus}
        />
        <SolFooter message={message} status={status} />
      </section>
    </main>
  );
};

export default Exercise;
