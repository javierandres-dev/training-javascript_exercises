import "./styles/normalize.css";
import "./styles/style.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  let solution = undefined,
    message = undefined;
  return (
    <Fragment>
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </Fragment>
  );
}

export default App;
