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
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form(Props: FormProps) {
  return (
    <form onSubmit={Props.handleSubmit}>
      {Props.children}
      <button type='submit'>RESULT</button>
    </form>
  );
}

interface InputProps {
  type: 'text' | 'number';
  placeholder: string;
}

export function Input(Props: InputProps) {
  return <input type={Props.type} placeholder={Props.placeholder} />;
}

interface LabelProps {
  content: string;
}
export function Label(Props: LabelProps) {
  return <label>{Props.content}</label>;
}
