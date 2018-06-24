import MuiButton from '@material-ui/core/Button';
import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  /** background color */
  bg?: string;
  onClick(): void;
}

const StyledMuiButton = styled(MuiButton)<IProps>`
  && {
    background: ${props => props.bg};
  }
`;

// React.SFC is alias of React.StatelessComponent
const Button: React.SFC<IProps> = ({ children, onClick, bg }) => {
  return (
    <StyledMuiButton onClick={onClick} bg={bg} variant="contained">
      {children}
    </StyledMuiButton>
  );
};

Button.defaultProps = {
  bg: '#ffa',
};

export default Button;
