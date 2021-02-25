import { FC } from 'react';

type Props = {
  title: string | undefined;
  exercise: number | undefined;
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
