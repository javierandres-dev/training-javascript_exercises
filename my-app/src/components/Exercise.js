import { React, Fragment } from "react";
import program from "../helpers/program";

const Exercise = ({ exercise }) => {
  setTimeout(() => {
    program(exercise);
  }, 1);
  return (
    <Fragment>
      <main role="main">
        <section className="card">
          <div className="card--head"></div>
          <div className="card--body"></div>
          <div className="card--foot"></div>
        </section>
      </main>
      <aside className="message"></aside>
    </Fragment>
  );
};

export default Exercise;
