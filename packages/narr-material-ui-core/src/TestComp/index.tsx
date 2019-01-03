import Button, { ButtonProps } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { styles } from './styles';

const TestComp: React.SFC<ButtonProps> = props => {
  return <Button disableRipple={true} {...props} />;
};
const StyledComp = withStyles(styles)(TestComp);

export { StyledComp as TestComp, ButtonProps as TestCompProps };
