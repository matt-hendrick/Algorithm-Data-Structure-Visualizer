import React, { ReactNode } from 'react';
import './MyButton.css';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  children: string | ReactNode;
}

const MyButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.disabled ? 'my-button-disabled' : 'my-button'}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default MyButton;
