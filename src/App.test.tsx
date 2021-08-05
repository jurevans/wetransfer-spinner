import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('Renders the Demo component', () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('demo').length).toBe(1);
  });

  it('Renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
