import "./styles/normalize.css";
import "./styles/style.css";
import { Fragment, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Exercise from "./components/Exercise";
import Footer from "./components/Footer";
import Empty from "./components/Empty";

function App() {
  const [exercise, setExercise] = useState(0);
  let component = undefined;
  if (exercise !== 0) {
    component = <Exercise exercise={exercise} />;
  } else {
    component = <Empty />;
  }
  return (
    <Fragment>
      <Header />
      <Nav setExercise={setExercise} />
      {component}
      <Footer />
    </Fragment>
  );
}

export default App;
