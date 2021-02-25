import { FC } from 'react';

type Props = {
  content: string;
};

const Button: FC<Props> = ({ content }) => {
  return <button className='card-button'>{content}</button>;
};

export default Button;
