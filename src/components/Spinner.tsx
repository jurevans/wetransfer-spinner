import { CSSProperties, FC, ReactElement } from 'react';
import { getOffset, getValidPercentage } from '../util';
import './Spinner.css';

type Props = {
  progress?: number;
  transitionDuration?: number;
  size?: number | string;
  radius?: number,
  strokeWidth?: number,
  progressStyles?: CSSProperties,
  rotate?: boolean;
  rotateDuration?: number,
};

const Spinner: FC<Props> = (props: Props): ReactElement => {
  const {
    progress = 0,
    transitionDuration = 1,
    size = '100%',
    strokeWidth = 25,
    progressStyles = {},
    rotate = false,
    rotateDuration = 2,
  } = props;

  const radius = 175;
  const diameter = Math.round(Math.PI * radius * 2);

  const progressStyle: CSSProperties = {
    strokeDashoffset: getOffset(progress, diameter),
    transition: `stroke-dashoffset ${transitionDuration}s ease-out`,
    transformOrigin: `${radius}px ${radius}px`,
    animationDuration: `${rotateDuration}s`,
    // Rotate progress bar when rotate is true, and progress is over zero
    animationPlayState: (rotate && progress > 0) ? 'running' : 'paused',
    // Styles can be overridden
    ...progressStyles,
  };

  const validPercentage = getValidPercentage(progress);

  return (
    <svg className='progress-spinner' width={size} height={size} viewBox='-25 -25 400 400'>
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
        transform={`rotate(-90 ${radius} ${radius})`}
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
        <tspan className='percentage-value'>{validPercentage}</tspan>
        <tspan dx={6} dy={-14} className='percentage-sup'>%</tspan>
      </text>
    </svg>
  );
};

export default Spinner;
