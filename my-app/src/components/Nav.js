import React from "react";
import getTitles from "../helpers/getTitles";

const Nav = ({ setExercise, setTitle }) => {
  const titles = getTitles(),
    buttons = titles.map((title, idx) => (
      <button
        key={idx + 1}
        onClick={() => {
          setExercise(idx + 1);
          setTitle(title);
        }}
      >
        {idx + 1}
      </button>
    ));
  return <nav className="nav">{buttons}</nav>;
};

export default Nav;
