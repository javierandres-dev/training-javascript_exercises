import React from 'react';
import Solution from './solutions/Solution';

type Props = {
  title: string | undefined;
  exercise: number | undefined;
};

const Exercise: React.FC<Props> = ({ title, exercise }) => {
  let component = undefined;
  if (typeof exercise === 'number') {
    component = <Solution exercise={exercise} />;
  }
  return (
    <section>
        <h2>
          <span>{exercise}. </span>
          {title}
        </h2>
      {component}
    </section>
  );
};

export default Exercise;
