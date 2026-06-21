import React, { useState } from 'react';

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-4 transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1">

      <div className="flex items-center justify-between">

          <div className="flex items-center justify-between">
            
            <div className='flex items-center gap-4'>

              <button
                onClick={() => toggleTask(task.id)}
                className={`
                  w-8 h-8
                  rounded-full
                  border-2
                  flex items-center justify-center

                  ${
                    task.completed
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-orange-500 text-transparent"
                  }
                `}
              >
                ✓
              </button>

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
                      : "text-xl font-semibold text-white"
                  }
                >
                  {task.title}
                </h3>

              )}

            </div>

          </div>

          <div className="flex gap-4">

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
                className="text-zinc-400 hover:text-white"
              >
                Edit
              </button>

            )}

            <button
              onClick={() => deleteTask(task.id)}
              className="text-zinc-400 hover:text-red-400"
            >
              Delete
            </button>

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