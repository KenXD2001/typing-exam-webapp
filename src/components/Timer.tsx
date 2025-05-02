import React, { useEffect, useState } from 'react';
import { formatTime } from '../utils/timerUtils';

interface TimerProps {
  duration: number;
  onEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onEnd }) => {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onEnd]);

  return (
    <div className="text-xl font-bold text-red-600">
      Time Left: {formatTime(secondsLeft)}
    </div>
  );
};

export default Timer;