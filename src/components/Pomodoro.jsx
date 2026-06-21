import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState("pomodoro");
    const [activeButton, setActiveButton] = useState("");
    const [totalTime, setTotalTime] = useState(25 * 60);

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

    const currentTime = minutes * 60 + seconds;

    const progress = currentTime / totalTime;

    const radius = 120;

    const circumference = 2 * Math.PI * radius;

    const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-center text-white text-3xl font-bold">
        🍅 Pomodoro Timer
      </h2>

      <div className="relative w-[300px] h-[300px] mx-auto mt-10">

            <svg
                className="absolute inset-0"
                width="300"
                height="300"
            >

                <circle
                cx="150"
                cy="150"
                r={radius}
                stroke="#27272a"
                strokeWidth="8"
                fill="none"
                />

                <circle
                cx="150"
                cy="150"
                r={radius}
                stroke="#f97316"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 150 150)"
                />

            </svg>

            <div className="absolute inset-0 flex items-center justify-center">

                <h1 className="text-6xl text-white font-light">
                {minutes}:
                {seconds < 10
                    ? `0${seconds}`
                    : seconds}
                </h1>

            </div>

        </div>

      <div className="flex justify-center gap-4 mt-10">

        <button
            onClick={() => {
                setIsRunning(true);
                setActiveButton("start");
            }}
            className={`px-6 py-3 rounded-xl ${
                activeButton === "start"
                    ? "bg-orange-500 text-black"
                    : "bg-zinc-800 text-white"
            }`}
        >
            Start
        </button>

        <button
            onClick={() => {
                setIsRunning(false);
                setActiveButton("pause");
            }}
            className={`px-6 py-3 rounded-xl ${
                activeButton === "pause"
                    ? "bg-orange-500 text-black"
                    : "bg-zinc-800 text-white"
            }`}
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
                setActiveButton("reset");
            }}
            className={`px-6 py-3 rounded-xl ${
                activeButton === "reset"
                    ? "bg-orange-500 text-black"
                    : "bg-zinc-800 text-white"
            }`}
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
                setTotalTime(25*60);
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
                setTotalTime(5*60);
                }}
                className={`px-6 py-3 rounded-xl ${
                    mode === "short"
                        ? "bg-orange-500 text-black"
                        : "bg-zinc-800 text-white"
                }`}
            >
                Short Break
            </button>

            <button
                onClick={() => {
                setMode("long");
                setMinutes(15);
                setSeconds(0);
                setIsRunning(false);
                setTotalTime(15*60);
                }}
                className={`px-6 py-3 rounded-xl ${
                    mode === "long"
                        ? "bg-orange-500 text-black"
                        : "bg-zinc-800 text-white"
                }`}
            >
                Long Break
            </button>

        </div>
        
    </div>
  );
};

export default Pomodoro;