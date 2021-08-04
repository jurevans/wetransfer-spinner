import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('should initialize at zero with no props provided', () => {
    const { container } = render(<Spinner />);
    expect(container.getElementsByClassName('percentage-value')[0].innerHTML).toBe('0');
  });

  it('should set the percentage value equal to the prop progress', () => {
    const { container } = render(<Spinner progress={35} />);
    expect(container.getElementsByClassName('percentage-value')[0].innerHTML).toBe('35');
  });
});
