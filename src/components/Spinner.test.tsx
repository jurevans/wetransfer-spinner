import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Spinner from './Spinner';
import SVGCounter from './SVGCounter';

describe('Spinner', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Spinner progress={55} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should initialize at zero with no props provided', () => {
    const radius = 175;
    const { container } = render(
      <Spinner radius={radius}>
        <SVGCounter x={radius} y={radius} percentage={0} />
      </Spinner>);
    // This type of test would be better suited to Enzyme:
    expect(container.getElementsByClassName('svg-counter-value')[0].innerHTML).toBe('0');
  });

  it('should set the percentage value equal to the prop progress', () => {
    const radius = 175;
    const progress = 35;
    const { container } = render(
      <Spinner radius={radius} progress={progress}>
        <SVGCounter x={radius} y={radius} percentage={progress} />
      </Spinner>);
    // This type of test would be better suited to Enzyme:
    expect(container.getElementsByClassName('svg-counter-value')[0].innerHTML).toBe('35');
  });
});
