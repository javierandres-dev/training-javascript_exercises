import React from 'react';
import program from '../helpers/program';

type Props = {
  title: string | undefined;
  exercise: number | undefined;
};

const Exercise: React.FC<Props> = ({ title, exercise }) => {
  console.log(title, exercise);
  program();
  return (
    <main role='main' id='exercise'>
      ... exercise ... program;
    </main>
  );
};

export default Exercise;
