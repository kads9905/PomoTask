import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-3">

      <div className="flex items-center justify-between">

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

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-400"
          >
            Delete
          </button>

      </div>

    </div>
  );
};

export default TaskItem;