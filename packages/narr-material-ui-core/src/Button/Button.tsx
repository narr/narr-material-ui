import MuiButton from '@material-ui/core/Button';
import * as React from 'react';

// React.SFC is alias of React.StatelessComponent
const Button: React.SFC<IProps> = ({ children, bg, onClick }) => {
  return (
    <MuiButton style={{ background: bg }} onClick={onClick} variant="contained">
      {children}
    </MuiButton>
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
