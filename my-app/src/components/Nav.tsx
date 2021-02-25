import React, { FC, Dispatch, SetStateAction } from 'react';
import getTitles from '../helpers/getTitles';

type Props = {
  setTitle: Dispatch<SetStateAction<string | undefined>>;
  setExercise: Dispatch<SetStateAction<number | undefined>>;
};

const Nav: FC<Props> = ({ setTitle, setExercise }) => {
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
  return <nav className='nav'>{buttons}</nav>;
};

export default Nav;
