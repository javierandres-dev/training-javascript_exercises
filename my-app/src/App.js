import "./styles/normalize.css";
import "./styles/style.css";
import { Fragment, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Exercise from "./components/Exercise";
import Footer from "./components/Footer";

function App() {
  const [exercise, setExercise] = useState(0),
    [title, setTitle] = useState(false);
  let component = undefined;
  if (exercise !== 0 && title !== false) {
    component = <Exercise exercise={exercise} title={title} />;
  } else {
    component = null;
  }
  return (
    <Fragment>
      <Header />
      <Nav setExercise={setExercise} setTitle={setTitle} />
      {component}
      <Footer />
    </Fragment>
  );
}

export default App;
