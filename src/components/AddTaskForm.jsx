import React from 'react';
import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = () => {
    if (title.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      date,
      priority,
      completed: false
    };

    addTask(newTask);

    setTitle("");
    setDate("");
    setPriority("Medium");
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">

        <input
          type="text"
          placeholder="Write your next task..."
          className="flex-1 bg-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="w-full lg:w-auto bg-zinc-800 text-zinc-300 px-4 py-4 rounded-2xl outline-none"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="w-full lg:w-auto bg-zinc-800 text-zinc-300 px-4 py-4 rounded-2xl outline-none"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={handleAddTask}
          className="w-16 h-16 rounded-full bg-orange-500 text-black text-3xl font-bold flex items-center justify-center hover:scale-110 transition"
        >
          +
        </button>

      </div>

    </div>
  );
};

export default AddTaskForm;