import { MuiThemeProvider } from '@material-ui/core/styles';
import { mount } from 'enzyme';
import * as React from 'react';

import { lightTheme } from '../Theme/light';
import { TestComp } from './index';

describe('<TestComp />', () => {
  it('renders children when passed in', () => {
    const children = 'this is children text';
    const wrapper = mount(<TestComp>{children}</TestComp>);
    expect(wrapper.text()).toEqual(children);
  });

  it('renders children with a custom theme', () => {
    const children = 'this is children text';
    const wrapper = mount(
      <MuiThemeProvider theme={lightTheme}>
        <TestComp>{children}</TestComp>
      </MuiThemeProvider>
    );
    expect(wrapper.text()).toEqual(children);
  });
});
