import React from "react";

const Nav = ({ setExercise }) => {
  return (
    <nav className="nav">
      <ol>
        <li>
          A JavaScript program to display the current day and time.
          <button
            className="btn"
            onClick={() => {
              setExercise(1);
            }}
          >
            Click me to see my solution
          </button>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
