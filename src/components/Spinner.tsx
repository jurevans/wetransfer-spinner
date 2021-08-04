import { CSSProperties, FC, ReactElement } from 'react';
import { getOffset, getValidPercentage } from '../util';
import './Spinner.css';

type Props = {
  progress?: number;
  animationDuration?: number;
  size?: number | string;
  radius?: number,
  strokeWidth?: number,
  progressStyles?: CSSProperties,
};

const Spinner: FC<Props> = (props: Props): ReactElement => {
  const {
    progress = 0,
    animationDuration = 1,
    size = '100%',
    strokeWidth = 25,
    progressStyles = {},
  } = props;

  const radius = 175;
  const diameter = Math.round(Math.PI * radius * 2);

  const progressStyle: CSSProperties = {
    ...progressStyles,
    strokeDashoffset: getOffset(progress, diameter),
    transition: `stroke-dashoffset ${animationDuration}s ease-out`,
  };

  return (
    <svg width={size} height={size} viewBox='-25 -25 400 400'>
      <circle
        className='progress-circle'
        cx={radius}
        cy={radius}
        r={radius}
        strokeWidth={strokeWidth}
        fill='none' />
      <circle
        className='progress-bar'
        cx={radius}
        cy={radius}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray='1100'
        strokeDashoffset='1100'
        strokeLinecap='round'
        style={progressStyle}
        fill='none'
      />
      <text
        className='percentage'
        x={radius}
        y={radius}
        textAnchor='middle'
        dominantBaseline='central'
      >
        <tspan className='percentage-value'>{getValidPercentage(progress)}</tspan>
        <tspan dx={6} dy={-14} className='percentage-sup'>%</tspan>
      </text>
    </svg>
  );
};

export default Spinner;
