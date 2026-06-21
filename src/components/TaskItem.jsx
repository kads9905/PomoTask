import React, { useState } from 'react';

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  
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

            {isEditing ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e) =>
                  setEditedTitle(e.target.value)
                }
                className="bg-zinc-800 text-white px-2 py-1 rounded"
              />

            ) : (

              <h3
                className={
                  task.completed
                    ? "text-zinc-500 line-through"
                    : "text-white"
                }
              >
                {task.title}
              </h3>

            )}

          </div>

          <div className="flex gap-3 mt-3">

            {isEditing ? (

              <button
                onClick={() => {
                  editTask(task.id, editedTitle);
                  setIsEditing(false);
                }}
                className="text-green-400"
              >
                Save
              </button>

            ) : (

              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-400"
              >
                Edit
              </button>

            )}

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