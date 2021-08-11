import { FC, ReactElement } from 'react';
import { getValidPercentage } from '../util';
import './SVGCounter.css';

type Props = {
  x: number | string;
  y: number | string;
  percentage: number;
};

const SVGCounter: FC<Props> = (props: Props): ReactElement => {
  const { x, y, percentage } = props;
  return (
    <text
      className='svg-counter'
      x={x}
      y={y}
      textAnchor='middle'
      dominantBaseline='central'
    >
      <tspan className='svg-counter-value'>{getValidPercentage(percentage)}</tspan>
      <tspan dx={6} dy={-14} className='svg-counter-sup'>%</tspan>
    </text>
  );
};

export default SVGCounter;
