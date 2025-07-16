'use client'
import { useEffect, useState } from 'react'

const OClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setTime(`${formattedHours}:${formattedMinutes}: ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="text-white flex-wrap">{time}</div>;
}

export default OClock
