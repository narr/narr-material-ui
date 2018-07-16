import { MuiThemeProvider } from '@material-ui/core/styles';
import { mount } from 'enzyme';
import * as React from 'react';
import myTheme from '../Theme';
import ButtonBase from './ButtonBase';

describe('<ButtonBase />', () => {
  it('renders children when passed in', () => {
    const mockFn = jest.fn();
    const children = 'this is children text';
    const wrapper = mount(<ButtonBase onClick={mockFn}>{children}</ButtonBase>);
    expect(wrapper.text()).toBe(children);
  });

  it('renders children with a custom theme', () => {
    const mockFn = jest.fn();
    const children = 'this is children text';
    const wrapper = mount(
      <MuiThemeProvider theme={myTheme.light}>
        <ButtonBase onClick={mockFn}>{children}</ButtonBase>
      </MuiThemeProvider>
    );
    expect(wrapper.text()).toBe(children);
  });
});
