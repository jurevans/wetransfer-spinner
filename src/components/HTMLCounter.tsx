import { FC, ReactElement } from 'react';
import { getValidPercentage } from '../util';
import './HTMLCounter.css';

type Props = {
  percentage: number;
};

const HTMLCounter: FC<Props> = (props: Props): ReactElement => {
  const { percentage } = props;
  return (
    <div className='html-counter'>
      <span className='html-counter-value'>
        <span className='html-counter-percentage'>{getValidPercentage(percentage)}</span>
        <span className='html-counter-sup'>%</span>
      </span>
    </div>
  );
};

export default HTMLCounter;
