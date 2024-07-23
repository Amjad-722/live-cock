import React from 'react';
import LiveClock from './Components/LiveClock/LiveClock';

const App = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='font-extrabold from-neutral-950 '> Live Clock</h1>
      <p>Current Time in New York:</p>
      <LiveClock timeZone="America/New_York" />
      <p>Current Time in London:</p>
      <LiveClock timeZone="Europe/London" />
      <p>Current Time in Tokyo:</p>
      <LiveClock timeZone="Asia/Tokyo" />
    </div>
  );
};

export default App;
