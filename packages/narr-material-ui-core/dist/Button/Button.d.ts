import { ButtonClassKey } from '@material-ui/core/Button';
interface ClassesProp {
  className?: string;
  classes: Record<ButtonClassKey | 'wrapper', string>;
}
interface ButtonProps
  extends Pick<ClassesProp, Exclude<keyof ClassesProp, 'classes'>> {
  bg?: string;
  classes?: {
    [key: string]: any;
  };
  onClick(): void;
}
declare const Button: import('../../../../node_modules/styled-components').StyledComponentClass<
  Pick<ClassesProp, 'className'> &
    import('../../../../node_modules/@material-ui/core/styles/withStyles').StyledComponentProps<
      'root' | 'wrapper'
    > &
    ButtonProps,
  any,
  Pick<
    import('../../../../node_modules/@material-ui/core').Overwrite<
      ClassesProp,
      import('../../../../node_modules/@material-ui/core/styles/withStyles').StyledComponentProps<
        'root' | 'wrapper'
      ><'root' | 'wrapper'>
    ><
      ClassesProp,
      import('../../../../node_modules/@material-ui/core/styles/withStyles').StyledComponentProps<
        'root' | 'wrapper'
      ><'root' | 'wrapper'>
    >,
    'classes' | 'innerRef' | 'className'
  > & {
    theme?: any;
  } & ButtonProps
>;
export default Button;
