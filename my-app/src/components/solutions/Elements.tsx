import * as React from 'react';

interface ButtonProps {
  type: 'button' | 'reset';
  content: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(Props: ButtonProps) {
  return (
    <button type={Props.type} onClick={Props.handleClick}>
      {Props.content}
    </button>
  );
}

interface FormProps {
  children: React.ReactNode;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

export function Form(Props: FormProps) {
  return (
    <form onSubmit={Props.handleSubmit}>
      {Props.children}
      <button type='submit'>RESULT</button>
    </form>
  );
}

interface LabelProps {
  htmlFor: string;
  content: string;
}
export function Label(Props: LabelProps) {
  return <label htmlFor={Props.htmlFor}>{Props.content}</label>;
}

interface InputProps {
  id: string;
  type: 'text';
  name: string;
  value: string;
}

export function Input(Props: InputProps) {
  return (
    <input
      id={Props.id}
      type={Props.type}
      name={Props.name}
      value={Props.value}
    />
  );
}
