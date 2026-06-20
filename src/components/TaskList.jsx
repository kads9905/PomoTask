import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <div className="mt-6">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
        />
      ))}

    </div>
  );
};

export default TaskList;