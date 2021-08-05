import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Demo from './Demo';

describe('Demo', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders start button', () => {
    render(<Demo />);
    const startElement = screen.getByText(/start/i);
    expect(startElement).toBeInTheDocument();
  });

  it('Renders the end button once start has been clicked', () => {
    render(<Demo />);
    fireEvent(
      screen.getByText('Start'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    const endButton = screen.getByText(/end/i);
    expect(endButton).toBeInTheDocument();
  });

  it('Renders a non-zero progress when Start and End have been clicked', () => {
    const { container } = render(<Demo />);
    fireEvent(
      screen.getByText('Start'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    fireEvent(
      screen.getByText('End'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    // This type of test would be better suited to Enzyme:
    expect(container.getElementsByClassName('percentage-value')[0].innerHTML).not.toBe('0');
  });
});
