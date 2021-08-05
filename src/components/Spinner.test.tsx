import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Spinner progress={55} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should initialize at zero with no props provided', () => {
    const { container } = render(<Spinner />);
    // This type of test would be better suited to Enzyme:
    expect(container.getElementsByClassName('percentage-value')[0].innerHTML).toBe('0');
  });

  it('should set the percentage value equal to the prop progress', () => {
    const { container } = render(<Spinner progress={35} />);
    // This type of test would be better suited to Enzyme:
    expect(container.getElementsByClassName('percentage-value')[0].innerHTML).toBe('35');
  });
});
