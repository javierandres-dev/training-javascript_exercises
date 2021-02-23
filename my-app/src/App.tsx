import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Exercise from './components/Exercise';
import Welcome from './components/Welcome';

function App() {
  const [title, setTitle] = useState<string | undefined>(undefined),
    [exercise, setExercise] = useState<number | undefined>(undefined);
  let component = undefined;

  if (title !== undefined && exercise !== undefined) {
    component = <Exercise title={title} exercise={exercise} />;
  } else {
    component = <Welcome />;
  }

  return (
    <Fragment>
      <Header />
      <Nav setTitle={setTitle} setExercise={setExercise} />
      {component}
      <Footer />
    </Fragment>
  );
}

export default App;
