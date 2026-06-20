import React from 'react';

const TaskItem = ({ task, toggleTask }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-3">

      <div className="flex items-center gap-4">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5"
        />

        <h3
          className={
            task.completed
              ? "text-zinc-500 line-through"
              : "text-white"
          }
        >
          {task.title}
        </h3>

      </div>

    </div>
  );
};

export default TaskItem;