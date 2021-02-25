import React, { FC, Fragment, useState } from 'react';
import Solution from './solutions/Solution';

type Props = {
  title: string | undefined;
  exercise: number | undefined;
};

const Exercise: FC<Props> = ({ title, exercise }) => {
  const [status, setStatus] = useState<string | undefined>(undefined);
  let component = undefined;
  if (typeof exercise === 'number') {
    component = <Solution exercise={exercise} setStatus={setStatus} />;
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
      <aside className='status'>{status}</aside>
    </Fragment>
  );
};

export default Exercise;
