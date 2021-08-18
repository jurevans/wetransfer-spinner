import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Spinner from './Spinner';
import SVGCounter from './SVGCounter';
import withHTMLCounter from './withHTMLCounter';
import './Demo.css';

const SpinnerWithHTMLCounter = withHTMLCounter(Spinner);

const Demo: FC = (): ReactElement => {
  const [progress, setProgress] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [timeoutId, setTimeoutId] = useState(0);

  const toggleIsSpinning = () => {
    setIsSpinning(!isSpinning);
  };

  const spin = useCallback(() => {
    if (progress === 100) {
      setProgress(0);
    } else {
      // Increment progress by a number between 1 and 8, with the result not
      // exceeding 100:
      setProgress(Math.min(progress + Math.floor(Math.random() * 8) + 1, 100));
    }
  }, [progress]);

  useEffect(() => {
    if (isSpinning) {
      const duration = (() => {
        switch(progress) {
          case 0:
            return 1500;
          case 100:
            return 1000;
          default:
            // Multiply 150ms by a random number between 1 and 5
            return (Math.floor(Math.random() * 5) + 1) * 150;
        }
      })();
      // Using "window.setTimeout" instead of "setTimeout" as it returns
      // a number we can use to easily store in state:
      const id: number = window.setTimeout(spin, duration);
      setTimeoutId(id);
    }
    return () => clearTimeout(timeoutId);
  }, [progress]);

  const handleStartSpinning = () => {
    toggleIsSpinning();
    spin();
  };

  const handleStopSpinning = () => {
    clearTimeout(timeoutId);
    toggleIsSpinning();
  };

  // Define radius for each demo spinner:
  const radius1 = 175;
  const radius2 = 125;
  const radius3 = 120;
  const radius4 = 300;

  return (
    <div className='demo'>
      <div className='demo-spinners'>
        <Spinner
          progress={progress}
          transitionDuration={0.75}
          rotate={isSpinning}
          radius={radius1}
          size='33%'
        >
          <SVGCounter
            x={radius1}
            y={radius1}
            percentage={progress}
          />
        </Spinner>
        <Spinner
          progress={progress}
          transitionDuration={0.50}
          rotate={isSpinning}
          rotateDuration={1.5}
          radius={radius2}
          size='38%'
        >
          <SVGCounter
            x={radius2}
            y={radius2}
            percentage={progress}
          />
        </Spinner>
        <Spinner
          progress={progress}
          transitionDuration={0.50}
          rotate={isSpinning}
          rotateDuration={1.25}
          radius={radius3}
          size='28%'
          strokeWidth={40}
          progressStyles={{ stroke: '#884499', strokeLinecap: 'unset' }}
        >
          <SVGCounter
            x={radius3}
            y={radius3}
            percentage={progress}
          />
        </Spinner>
        <Spinner
          progress={progress}
          transitionDuration={1.25}
          rotate={isSpinning}
          rotateDuration={10}
          radius={radius4}
          size={radius4}
        >
          <SVGCounter
            x='47%'
            y='47%'
            percentage={progress}
          />
        </Spinner>
        <SpinnerWithHTMLCounter
          progress={progress}
          rotate={false}
          transitionDuration={0.8}
        />
      </div>
      <div className='demo-buttons'>
        {isSpinning
          ? <button onClick={handleStopSpinning}>End</button>
          : <button onClick={handleStartSpinning}>Start</button>}
      </div>
    </div>
  );
};

export default Demo;
