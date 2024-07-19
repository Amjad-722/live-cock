import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const LiveClock = ({ timeZone }) => {
  const [time, setTime] = useState(moment.tz(timeZone).format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment.tz(timeZone).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return <div>{time}</div>;
};

export default LiveClock;
