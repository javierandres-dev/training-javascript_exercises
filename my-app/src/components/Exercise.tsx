import React, { Fragment } from 'react';
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
    <Fragment>
      <main role='main'>
        <h2>
          <span>{exercise}. </span>
          {title}
        </h2>
      </main>
      {component}
    </Fragment>
  );
};

export default Exercise;
