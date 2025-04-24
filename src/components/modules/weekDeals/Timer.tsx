import React from 'react';

interface TimerProps {
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const Timer: React.FC<TimerProps> = ({ timeRemaining }) => {
  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className='flex flex-col bg-sky-500 rounded-lg text-white text-center overflow-hidden'>
      <div className='py-2 px-4'>
        <div className='text-xl font-bold'>{days}</div>
        <div className='text-xs'>Days</div>
      </div>

      <div className='py-2 px-4 bg-sky-400'>
        <div className='text-xl font-bold'>{hours}</div>
        <div className='text-xs'>Hrs</div>
      </div>

      <div className='py-2 px-4 bg-sky-500'>
        <div className='text-xl font-bold'>{minutes}</div>
        <div className='text-xs'>Min</div>
      </div>

      <div className='py-2 px-4 bg-sky-400'>
        <div className='text-xl font-bold'>{seconds}</div>
        <div className='text-xs'>Sec</div>
      </div>
    </div>
  );
};

export default Timer;
