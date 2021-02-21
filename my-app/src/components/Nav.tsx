import React from 'react';
import getTitles from '../helpers/getTitles';

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  setExercise: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const Nav: React.FC<Props> = ({ setTitle, setExercise }) => {
  const titles: string[] = getTitles(),
    buttons = titles.map((title: string, idx: number) => (
      <button
        key={idx + 1}
        onClick={() => {
          setTitle(title);
          setExercise(idx + 1);
        }}
      >
        {idx + 1}
      </button>
    ));
  return <nav>{buttons}</nav>;
};

export default Nav;
