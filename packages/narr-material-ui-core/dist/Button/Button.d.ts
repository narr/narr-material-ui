import * as React from 'react';
interface IProps {
  /** background color */
  bg?: string;
  onClick(): void;
}
declare const Button: React.SFC<IProps>;
export default Button;
