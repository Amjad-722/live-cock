import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const LiveClock = ({ timeZone }) => {
  const [time, setTime] = useState(moment.tz(timeZone).format("HH:mm:ss"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment.tz(timeZone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return <div className="p-2 border border-gray-300 rounded-md text-center bg-gray-100 text-gray-800 font-mono">{time}</div>;
};

export default LiveClock;
