import React from 'react';
import { render } from '@testing-library/react';
import { lorem } from 'faker';

import { Button } from '.';

describe('<Button />', () => {
  it('should render a text', () => {
    const btnTxt = lorem.word();
    const { queryByText } = render(<Button>{btnTxt}</Button>);
    const button = document.querySelector('button');
    const buttonText = queryByText(btnTxt);
    expect(button).toBeInTheDocument();
    expect(button).toContainElement(buttonText);
  });
});
