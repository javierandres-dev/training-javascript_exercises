import React from "react";
import program from "../helpers/program";

const Exercise = ({ exercise, title }) => {
  setTimeout(() => {
    program(exercise);
  }, 1);
  return (
    <main role="main" className="exercise">
      <h2 className="exercise__title">
        <span>{exercise}. </span>
        {title}
      </h2>
      <aside className="alert"></aside>
      <div className="exercise__solution"></div>
    </main>
  );
};

export default Exercise;
