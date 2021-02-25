import * as React from 'react';

interface ButtonProps {
  content: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(Props: ButtonProps) {
  return (
    <button className='card-button' onClick={Props.clickHandler}>
      {Props.content}
    </button>
  );
}
