import {
  CSSProperties,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Spinner from './Spinner';

const styles: CSSProperties = {
  width: 200,
  height: 200,
  margin: '0 auto',
  textAlign: 'center',
};

const Demo: FC = (): ReactElement => {
  const [progress, setProgress] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleIsSpinning = () => {
    setIsSpinning(!isSpinning);
  };

  const spin = useCallback(() => {
    if (progress === 100) {
      setProgress(0);
    } else {
      setProgress(progress + 1);
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
          return 80;
        }
      })();
      setTimeout(spin, duration)
    }
  }, [progress]);

  const handleStartSpinning = () => {
    toggleIsSpinning();
    spin();
  };

  const handleStopSpinning = () => {
    toggleIsSpinning();
  };

  return (
    <div className='demo' style={styles}>
      <Spinner progress={progress} animationDuration={0.75} rotationFactor={10} />
      {!isSpinning
        && <button onClick={handleStartSpinning}>Start</button>}
      {isSpinning
        && <button onClick={handleStopSpinning}>End</button>}
    </div>
  );
};

export default Demo;
