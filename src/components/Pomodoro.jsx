import React from 'react';

const Pomodoro = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-center text-white text-3xl font-bold">
        🍅 Pomodoro Timer
      </h2>

      <div className="text-center mt-10">

        <h1 className="text-6xl text-white font-light">
          25:00
        </h1>

      </div>

      <div className="flex justify-center gap-4 mt-10">

        <button className="bg-zinc-800 text-white px-6 py-3 rounded-xl">
          Start
        </button>

        <button className="bg-zinc-800 text-white px-6 py-3 rounded-xl">
          Pause
        </button>

        <button className="bg-zinc-800 text-white px-6 py-3 rounded-xl">
          Reset
        </button>

      </div>

    </div>
  );
};

export default Pomodoro;