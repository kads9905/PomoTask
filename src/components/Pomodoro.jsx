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
    const radius = 145;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 h-full flex flex-col">

      <h2 className="text-center text-white text-4xl font-bold mb-5 mt-6">
        🍅 Pomodoro Timer
      </h2>

      <div className="flex justify-center gap-4 mt-8">

        <button 
            onClick={()=> {
                setIsRunning(true)
                setActiveButton("start")
            }}
            disabled={isRunning}
            className={`
                w-30 h-20 rounded-2xl transition-all duration-200 hover:scale-105 font-medium mt-6
                ${
                    activeButton === "start"
                        ?"bg-orange-500 text-black"
                        :"bg-zinc-800 text-white"
                }
            `}
        >
            ▶
        </button>

        <button 
            onClick={() => {
                setIsRunning(false)
                setActiveButton("pause")
            }}
            className={`
                w-30 h-20 rounded-2xl transition-all duration-200 hover:scale-105 font-medium mt-6
                ${
                    activeButton === "pause"
                        ?"bg-orange-500 text-black"
                        :"bg-zinc-800 text-white"
                }
            `}
        >
            ❚❚
        </button>

        <button 
            onClick={() => {
                setIsRunning(false);
                if(mode === "pomodoro"){
                    setMinutes(25);
                } else if(mode === "short"){
                    setMinutes(5);
                } else {
                    setMinutes(15);
                }
                setSeconds(0);
                setActiveButton("reset");
            }}
            className={`
                w-30 h-20 rounded-2xl transition-all duration-200 hover:scale-105 font-medium mt-6
                ${
                    activeButton === "reset"
                        ?"bg-orange-500 text-black"
                        :"bg-zinc-800 text-white"
                }
            `}
        >
            ↺
        </button>

      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[360px] h-[360px]">

            <svg
                className="absolute inset-0"
                width="360"
                height="360"
            >

                <circle
                cx="180"
                cy="180"
                r={radius}
                stroke="#27272a"
                strokeWidth="8"
                fill="none"
                />

                <circle
                cx="180"
                cy="180"
                r={radius}
                stroke="#f97316"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 180 180)"
                />

            </svg>

            <div className="absolute flex-wrap inset-0 flex items-center justify-center">

                <h1 className="text-7xl text-white font-light">
                {minutes}:
                {seconds < 10
                    ? `0${seconds}`
                    : seconds}
                </h1>

            </div>
        </div>

        </div>
        

       <div className="flex flex-col flex-wrap xl:flex-row justify-center gap-4 mt-4">

            <button
                onClick={() => {
                    setMode("pomodoro");
                    setMinutes(25);
                    setSeconds(0);
                    setTotalTime(25*60)
                }}
                className={`min-w-[160px] px-8 py-5 rounded-3xl text-xl font-semibold transition-all duration-200  mb-6 hover:scale-105
                    ${
                        mode === "pomodoro"
                        ? "bg-orange-500 text-black"
                        : "bg-zinc-800 text-white"
                    }`}
            >
                Pomodoro
            </button>

            <button
                onClick={() => {
                    setMode("short");
                    setMinutes(5);
                    setSeconds(0);
                    setTotalTime(5 * 60);
                }}
                className={`min-w-[160px] px-8 py-5 rounded-3xl text-xl font-semibold transition-all duration-200 mb-6 hover:scale-105
                    ${
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
                    setTotalTime(15*60)
                }}
                className={`min-w-[160px] px-8 py-5 rounded-3xl text-xl font-semibold duration-200 transition-all mb-6 hover:scale-105
                    ${
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