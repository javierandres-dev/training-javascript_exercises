import { FC } from 'react';
import SolHeader from './solutions/SolHeader';
import SolContent from './solutions/SolContent';

type Props = {
  title: string;
  exercise: number;
};

const Exercise: FC<Props> = ({ title, exercise }) => {
  return (
    <main role='main' className='container'>
      <section className='card'>
        <SolHeader title={title} exercise={exercise} />
        <SolContent exercise={exercise} />
      </section>
    </main>
  );
};

export default Exercise;
