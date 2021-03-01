import * as React from 'react';

interface ButtonProps {
  type: 'button' | 'reset';
  content: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(Props: ButtonProps) {
  return (
    <button type={Props.type} onClick={Props.onClick}>
      {Props.content}
    </button>
  );
}

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.SyntheticEvent) => void;
}

export function Form(Props: FormProps) {
  return (
    <form onSubmit={Props.onSubmit}>
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
  type: 'number' | 'string';
  name: string;
  placeholder: string;
  value: number | string | undefined;
  onChange: (e: React.SyntheticEvent) => void;
}

export function Input(Props: InputProps) {
  return (
    <input
      id={Props.id}
      type={Props.type}
      name={Props.name}
      value={Props.value}
      placeholder={Props.placeholder}
      onChange={Props.onChange}
      required
    />
  );
}
