import * as React from 'react';

function Button({ onClick, children }: IProps) {
  return (
    <div className="foo">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

interface IProps {
  children: JSX.Element | string;
  onClick(): void;
}

export default Button;
