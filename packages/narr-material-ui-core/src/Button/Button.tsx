import MuiButton, { ButtonClassKey } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

interface ClassesProp {
  className?: string;
  classes: Record<ButtonClassKey | 'wrapper', string>;
}

interface ButtonProps
  extends Pick<ClassesProp, Exclude<keyof ClassesProp, 'classes'>> {
  bg?: string;
  classes?: { [key: string]: any };
  onClick(): void;
}

const styles = () => {
  return {
    root: {
      color: '#eee',
    },
    wrapper: {
      color: 'blue',
    },
  };
};

const ClassesNesting: React.SFC<ClassesProp> = ({
  className,
  classes,
  ...otherProps
}) => {
  const muiClasses = _.pickBy(classes, (item, key) => key !== 'wrapper');
  return (
    // accept global css, className
    <div className={`${classes.wrapper} ${className}`}>
      <MuiButton
        classes={muiClasses}
        variant="contained"
        color="secondary"
        {...otherProps}
      />
    </div>
  );
};
const WithStyleButton = withStyles(styles)(ClassesNesting);

const Button = styled(WithStyleButton)<ButtonProps>`
  && {
    background: ${props => props.bg};
  }
`;

Button.propTypes = {
  bg: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  bg: '#ffa',
};

Button.displayName = 'Button';

export default Button;
