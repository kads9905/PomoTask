import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-3">

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
  );
};

export default TaskItem;