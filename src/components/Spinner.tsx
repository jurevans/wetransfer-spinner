import { CSSProperties, FC, ReactElement } from 'react';
import {
  getOffset,
  getValidPercentage,
  calculateDiameter,
  getViewBoxForCircle,
} from '../util';
import './Spinner.css';

type Props = {
  progress?: number;
  transitionDuration?: number;
  size?: number | string;
  radius?: number;
  strokeWidth?: number;
  progressStyles?: CSSProperties;
  rotate?: boolean;
  rotateDuration?: number;
  children?: JSX.Element;
};

const Spinner: FC<Props> = (props: Props): ReactElement => {
  const {
    progress = 0,
    transitionDuration = 1,
    size = '100%',
    radius = 175,
    strokeWidth = 25,
    progressStyles = {},
    rotate = false,
    rotateDuration = 2,
    children,
  } = props;

  const diameter = calculateDiameter(radius);
  const validPercentage = getValidPercentage(progress);
  const viewBox = getViewBoxForCircle(radius, strokeWidth);
  const progressStyle: CSSProperties = {
    strokeDashoffset: getOffset(progress, diameter),
    transition: `stroke-dashoffset ${transitionDuration}s ease-out`,
    transformOrigin: `${radius}px ${radius}px`,
    animationDuration: `${rotateDuration}s`,
    // Rotate progress bar when rotate is true, and progress is over zero
    animationPlayState: (rotate && validPercentage > 0) ? 'running' : 'paused',
    // Styles can be overridden
    ...progressStyles,
  };

  return (
    <svg
      className='progress-spinner'
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <circle
        className='progress-circle'
        cx={radius}
        cy={radius}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className='progress-bar'
        cx={radius}
        cy={radius}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={diameter}
        style={progressStyle}
      />
      {children}
    </svg>
  );
};

export default Spinner;
