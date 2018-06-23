import { shallow } from 'enzyme';
import * as React from 'react';
import Button from './Button';

describe('<Button />', () => {
  it('renders children when passed in', () => {
    const mockFn = jest.fn();
    const childrenProp = 'this is children text';
    const wrapper = shallow(<Button onClick={mockFn}>{childrenProp}</Button>);
    expect(wrapper.text()).toBe(childrenProp);
  });
});
