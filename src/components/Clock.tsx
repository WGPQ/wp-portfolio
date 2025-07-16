'use client'
import { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState('william');

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

// type TimeDisplayProps = {
//   timeZone: string;
//   locale?: string; // Optionally allow locale, defaulting to 'en-GB'
// };
// const Clock: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
//   const [currentTime, setCurrentTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const options: Intl.DateTimeFormatOptions = {
//         timeZone,
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false,
//       };
//       const timeString = new Intl.DateTimeFormat(locale, options).format(now);
//       setCurrentTime(timeString);
//     };

//     updateTime();
//     const intervalId = setInterval(updateTime, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeZone, locale]);

//   return <>{currentTime}</>;
// };

export default Clock
