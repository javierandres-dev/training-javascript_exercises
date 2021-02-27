import { FC } from 'react';

type Props = {
  title: string;
  exercise: number;
};

const SolHeader: FC<Props> = ({ title, exercise }) => {
  return (
    <header className='card-header'>
      <h2>
        <span>{exercise}. </span>
        {title}
      </h2>
    </header>
  );
};

export default SolHeader;
