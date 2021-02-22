import React from 'react';

type Props = {
  title: string | undefined;
  exercise: number | undefined;
};

const Exercise: React.FC<Props> = ({ title, exercise }) => {
  if (typeof exercise === 'number') {
    const nameExercise = `exercise${exercise}`;
    let component = undefined;
    if (nameExercise === 'exercise1') {
      import Exercise1 from './exercises/Exercise1';
      component = Exercise1;
    }
  }
  return (
    <main role='main'>
      <h2>
        <span>{exercise}. </span>
        {title}
      </h2>
      <div id='solution'>{component}</div>
    </main>
  );
};

export default Exercise;
