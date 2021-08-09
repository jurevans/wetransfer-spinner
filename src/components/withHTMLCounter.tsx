import React, { ReactElement } from 'react';
import HTMLCounter from './HTMLCounter';

type Props = {
  progress: number;
};

const withHTMLCounter = <P extends Record<string, unknown>>(
  SpinnerComponent: React.ComponentType<P>
): React.FC<P & Props> => 
  (props: P & Props): ReactElement => {
    const { progress: percentage } = props;
    return (
      <div className='html-spinner-container'>
        <SpinnerComponent {...props} />
        <HTMLCounter percentage={percentage} />
      </div>
    );
};

export default withHTMLCounter;
