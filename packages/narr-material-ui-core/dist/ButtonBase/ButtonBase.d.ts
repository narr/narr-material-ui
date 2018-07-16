import * as React from 'react';
interface ButtonBaseProps {
  classes?: {
    [key: string]: any;
  };
  /** Browser Tooltip  */
  title?: string;
  onClick(): void;
}
declare const ButtonBase: React.ComponentType<
  import('../../../../node_modules/@material-ui/core').Overwrite<
    ButtonBaseProps,
    import('../../../../node_modules/@material-ui/core/styles/withStyles').StyledComponentProps<
      'root'
    ><'root'>
  ><
    ButtonBaseProps,
    import('../../../../node_modules/@material-ui/core/styles/withStyles').StyledComponentProps<
      'root'
    ><'root'>
  >
>;
export default ButtonBase;
