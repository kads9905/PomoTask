import React from 'react';

const Header = ({ theme, setTheme }) => {
  return (
    <header className="flex justify-between items-center mb-8">

      <h1 className="text-4xl font-bold">

        <span className="text-white">
          POMO
        </span>

        <span className="text-orange-500">
          TASK
        </span>

      </h1>

      <div className="flex items-center gap-6 text-2xl">

        <button className="text-zinc-400 hover:text-white">
          ☀️
        </button>

        <button className="text-zinc-400 hover:text-white">
          🌙
        </button>

      </div>

    </header>
  );
};

export default Header;