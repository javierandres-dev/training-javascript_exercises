import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Exercise from './components/Exercise';

function App() {
  const [title, setTitle] = useState<string | undefined>(undefined),
    [exercise, setExercise] = useState<number | undefined>(undefined);
  let main = undefined;

  if (title !== undefined && exercise !== undefined) {
    main = <Exercise title={title} exercise={exercise} />;
  } else {
    main = <Welcome />;
  }

  return (
    <Fragment>
      <Header />
      <Nav setTitle={setTitle} setExercise={setExercise} />
      {main}
      <Footer />
    </Fragment>
  );
}

export default App;
