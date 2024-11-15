'use client';

type Props = {
  handleClick: (id: string) => void;
  title: string;
  id: string;
};

const Button: React.FC<Props> = ({ handleClick, title, id }) => {
  return <button onClick={() => handleClick(id)}>{title}</button>;
};

export default Button;
