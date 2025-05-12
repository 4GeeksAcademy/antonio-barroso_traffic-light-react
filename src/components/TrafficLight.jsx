import { useState, useEffect } from 'react';
import Protector from './Protector';
import Light from './Light';

const RED = 'red';
const YELLOW = 'yellow';
const GREEN = 'green';

const TrafficLight = () => {
  const [state, setState] = useState(RED);

  // Actualizar el estado cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev === RED) return GREEN;
        if (prev === GREEN) return YELLOW;
        if (prev === YELLOW) return RED;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="trafficlight">
      <Protector />
      <Protector />
      <Protector />
      <Light color="red" isActive={false} />
      <Light color="yellow" isActive={true} />
      <Light color="green" isActive={false} />
    </div>
  );
};

export default TrafficLight;
