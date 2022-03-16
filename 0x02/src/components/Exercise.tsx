import { FC } from 'react';
import { Link } from 'react-router-dom';
import SolHeader from './solutions/SolHeader';
import SolContent from './solutions/SolContent';

type Props = {
  title: string;
  exercise: number;
};

const Exercise: FC<Props> = ({ title, exercise }) => {
  return (
    <main role='main' className='container'>
      <Link to='/' className='link-back'>
        Back
      </Link>
      <section className='card'>
        <SolHeader title={title} exercise={exercise} />
        <SolContent exercise={exercise} />
      </section>
    </main>
  );
};

export default Exercise;
