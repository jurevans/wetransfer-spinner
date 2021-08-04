import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Renders the Demo component', () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('demo').length).toBe(1);
  });
})

