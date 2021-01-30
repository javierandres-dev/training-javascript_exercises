import React from "react";
import program from "../helpers/program";

const Exercise = ({ exercise, title }) => {
  setTimeout(() => {
    program(exercise);
  }, 1);
  return (
    <main role="main" className="container exercise">
      <h2>
        <span>{exercise}. </span>
        {title}
      </h2>
      <div className="exercise__solution"></div>
    </main>
  );
};

export default Exercise;
