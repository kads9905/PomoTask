import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4">

      <button
        onClick={() => setFilter("all")}
        className={`px-6 py-3 rounded-xl ${
          filter === "all"
            ? "bg-orange-500 text-black"
            : "bg-zinc-800 text-white"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-6 py-3 rounded-xl ${
          filter === "pending"
            ? "bg-orange-500 text-black"
            : "bg-zinc-800 text-white"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-6 py-3 rounded-xl ${
          filter === "completed"
            ? "bg-orange-500 text-black"
            : "bg-zinc-800 text-white"
        }`}
      >
        Completed
      </button>

    </div>
  );
};

export default FilterBar;