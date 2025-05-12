import { useState, useEffect } from 'react';
import { FaWalking, FaHandPaper } from 'react-icons/fa';
import Protector from './Protector';

const RED = 'red';
const GREEN = 'green';
const COUNTDOWN_TIME = 10;

const CrossLight = () => {
  const [state, setState] = useState(RED);
  const [countdown, setCountdown] = useState(COUNTDOWN_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setState((prev) => (prev === RED ? GREEN : RED));
      setCountdown(COUNTDOWN_TIME);
    }
  }, [countdown]);

  return (
    <div className="trafficlight">
      <div className="crosslight-container">
        <Protector />
        <Protector />
        <div className={`cross-light ${state === RED ? 'active red' : 'inactive'}`}>
          {state === RED && (
            <FaHandPaper size={36} className={`${countdown <= 5 ? 'warning' : ''}`} />
          )}
          {state === GREEN && (
            <span className={`countdown green ${countdown <= 5 ? 'warning' : ''}`}>
              {countdown}
            </span>
          )}
        </div>
        <div className={`cross-light ${state === GREEN ? 'active green' : 'inactive'}`}>
          {state === GREEN && (
            <FaWalking size={36} className={`${countdown <= 5 ? 'warning' : ''}`} />
          )}
          {state === RED && (
            <span className={`countdown red ${countdown <= 5 ? 'warning' : ''}`}>{countdown}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrossLight;
