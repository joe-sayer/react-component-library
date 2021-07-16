import React from 'react';
import Button from './Button';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Button', () => {
  const props = {
    label: 'TestButton',
    onClick: () => console.log('test')
  };
  it('renders properly', () => {
    const { getByText } = render(<Button {...props} />);
    const button = getByText('TestButton');
    expect(button).toBeInTheDocument();
  });
});
