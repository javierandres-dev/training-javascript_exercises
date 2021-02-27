import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Exercise from './components/Exercise';

function App() {
  const [title, setTitle] = useState<string>(''),
    [exercise, setExercise] = useState<number>(0),
    [message, setMessage] = useState<string>(''),
    [status, setStatus] = useState<string>('');
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <Welcome setTitle={setTitle} setExercise={setExercise} />
          )}
        />
        <Route
          exact
          path='/exercise'
          component={() => (
            <Exercise
              title={title}
              exercise={exercise}
              message={message}
              setMessage={setMessage}
              status={status}
              setStatus={setStatus}
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
