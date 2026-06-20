import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState("pomodoro");

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            if (seconds > 0) {
            setSeconds(seconds - 1);
            } else if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
            } else {
            setIsRunning(false);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning, minutes, seconds]);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-center text-white text-3xl font-bold">
        🍅 Pomodoro Timer
      </h2>

      <div className="text-center mt-10">

        <h1 className="text-6xl text-white font-light">
            {minutes}:
            {seconds < 10
                ? `0${seconds}`
                : seconds}
            </h1>
      </div>

      <div className="flex justify-center gap-4 mt-10">

        <button
            onClick={() => setIsRunning(true)}
            className="bg-zinc-800 text-white px-6 py-3 rounded-xl"
        >
          Start
        </button>

        <button
            onClick={() => setIsRunning(false)}
            className="bg-zinc-800 text-white px-6 py-3 rounded-xl"
        >
          Pause
        </button>

        <button
            onClick={() => {
                setIsRunning(false);
                if (mode === "pomodoro") {
                    setMinutes(25);
                } else if (mode === "short") {
                    setMinutes(5);
                } else {
                    setMinutes(15);
                }
                setSeconds(0);
            }}
            className="bg-zinc-800 text-white px-6 py-3 rounded-xl"
        >
          Reset
        </button>
        

      </div>
        

       <div className="flex justify-center gap-4 mt-10">

            <button
                onClick={() => {
                setMode("pomodoro");
                setMinutes(25);
                setSeconds(0);
                setIsRunning(false);
                }}
                className="bg-zinc-800 text-white px-6 py-3 rounded-xl"
            >
                Pomodoro
            </button>

            <button
                onClick={() => {
                setMode("short");
                setMinutes(5);
                setSeconds(0);
                setIsRunning(false);
                }}
                className="bg-zinc-800 text-white px-6 py-3 rounded-xl"
            >
                Short Break
            </button>

            <button
                onClick={() => {
                setMode("long");
                setMinutes(15);
                setSeconds(0);
                setIsRunning(false);
                }}
                className="bg-zinc-800 text-white px-6 py-3 rounded-xl"
            >
                Long Break
            </button>

        </div>
        
    </div>
  );
};

export default Pomodoro;