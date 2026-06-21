import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center mt-8">

        <h2 className="text-2xl font-bold text-white">
          No tasks yet
        </h2>

        <p className="text-zinc-400 mt-4">
          Add your first task above
        </p>

      </div>
    );
  }
  return (
    <div className="mt-6">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}

    </div>
  );
};

export default TaskList;