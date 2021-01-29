import React from "react";
import getTitle from "../helpers/getTitle";

const Nav = ({ setExercise, setTitle }) => {
  return (
    <nav className="nav">
      <button
        onClick={() => {
          setExercise(1);
          setTitle(getTitle(1));
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setExercise(2);
          setTitle(getTitle(2));
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setExercise(3);
          setTitle(getTitle(3));
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setExercise(4);
          setTitle(getTitle(4));
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setExercise(5);
          setTitle(getTitle(5));
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          setExercise(6);
          setTitle(getTitle(6));
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          setExercise(7);
          setTitle(getTitle(7));
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          setExercise(8);
          setTitle(getTitle(8));
        }}
      >
        8
      </button>
    </nav>
  );
};

export default Nav;
