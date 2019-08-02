import MuiButton, {
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import React from 'react';

import { useStyles } from './styles';

export type ButtonClassKey = 'custom';

export interface ButtonProps extends MuiButtonProps {
  classes?: MuiButtonProps['classes'] & Partial<Record<ButtonClassKey, string>>;
}

export const Button: React.SFC<ButtonProps> = props => {
  const { classes, ...otherProps } = props;
  const { custom, ...otherNewClasses } = useStyles(props);
  return <MuiButton classes={otherNewClasses} {...otherProps} />;
};
