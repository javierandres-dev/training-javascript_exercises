import "./styles/normalize.css";
import "./styles/style.css";
import { Fragment, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Exercise from "./components/Exercise";

function App() {
  const [exercise, setExercise] = useState(0),
    [title, setTitle] = useState(undefined);
  let component = undefined;
  if (exercise !== 0 && title !== undefined) {
    component = <Exercise exercise={exercise} title={title} />;
  } else {
    component = null;
  }
  return (
    <Fragment>
      <Header />
      <Nav setExercise={setExercise} setTitle={setTitle} />
      {component}
      <Aside />
      <Footer />
    </Fragment>
  );
}

export default App;
