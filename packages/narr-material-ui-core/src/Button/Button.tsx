import * as React from 'react';

// React.SFC is alias of React.StatelessComponent
const Button: React.SFC<IProps> = ({ onClick, children, bg }) => {
  return (
    <div className="foo">
      <button style={{ background: bg }} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  bg: '#ffa',
};

interface IProps {
  children: JSX.Element | string;
  /** background color */
  bg?: string;
  onClick(): void;
}

export default Button;
