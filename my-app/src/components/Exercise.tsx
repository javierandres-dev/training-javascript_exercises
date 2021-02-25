import React, { Fragment } from 'react';
import Solution from './solutions/Solution';
import Notification from './Notification';

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
      <main role='main' className='container'>
        <section className='card'>
          <header className='card-header'>
            <h2>
              <span>{exercise}. </span>
              {title}
            </h2>
          </header>
          {component}
        </section>
      </main>
      <Notification />
    </Fragment>
  );
};

export default Exercise;
