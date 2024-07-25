import React from 'react';
import LiveClock from './Components/LiveClock/LiveClock';

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-700">
    <div className="flex flex-col justify-center items-center border-spacing-4 pt-48 shadow-xl shadow-red-700 bg-zinc-500   p-28 rounded-lg">
 
      
      
      <h1 className="font-extrabold text-3xl  text-zinc-100 mb-4 ">Live Clock</h1>
      
      <p className="mt-6  text-white font-medium text-lg mb-2">Current Time in London:</p>
 
      <LiveClock timeZone="Europe/London" />
      <p className="mt-4  text-white  text-lg  font-medium mb-2">Current Time in Tokyo:</p>
      <LiveClock timeZone="Asia/Tokyo" />
    </div>
  </div>
  
  );
};

export default App;
