import React from "react";

const Nav = ({ setExercise, setTitle }) => {
  const titles = [
    0,
    "A JavaScript program to display the current day and time.",
  ];
  return (
    <nav className="nav">
      <ol>
        <li>
          {titles[1]}
          <button
            className="btn"
            onClick={() => {
              setExercise(1);
              setTitle(titles[1]);
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
