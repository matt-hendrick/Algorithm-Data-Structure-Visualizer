import React from 'react';

import './Input.css';

interface Props {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
}

const Input = (props: Props) => {
  return (
    <input
      className="Input"
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
