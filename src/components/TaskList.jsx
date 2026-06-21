import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask, editTask, deleteTask, filter, searchTerm }) => {
  if(tasks.length === 0){
    if(searchTerm.trim() !== ""){
      return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center mt-8">

          <h2 className="text-2xl font-bold text-white">
            No matching tasks found
          </h2>

          <p className="text-zinc-400 mt-4">
            Try a different search term
          </p>

        </div>
      );
    }
    if(filter === "pending"){
      return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center mt-8">

          <h2 className="text-2xl font-bold text-white">
            No pending tasks today
          </h2>

          <p className="text-zinc-400 mt-4">
            You're done for the day
          </p>

        </div>
      );
    }

    if(filter === "completed"){
      return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center mt-8">

          <h2 className="text-2xl font-bold text-white">
            No completed tasks yet
          </h2>

          <p className="text-zinc-400 mt-4">
            Complete a task to get started
          </p>

        </div>
      );
    }

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
    <div>
        {tasks.map(task => (
            <TaskItem 
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
            />
        ))}
    </div>
  )
}

export default TaskList

// tasklist needs to know which filter is currently active
// tasklist responsible for looping through tasks show title checkbox button
// style card
// with taskItem it receives tasks -> loops through tasks ->
// and creates taskitem for each tasks