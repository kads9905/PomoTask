import React, { useState } from 'react';

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(task.title); 

  const [editedDate, setEditedDate] = useState(task.date);

  const [editedPriority, setEditedPriority] = useState(task.priority);

  const saveTask = async () => {

    if (editedTitle.trim() === "") {
      alert("Task title cannot be empty.");
      return;
    }

    await editTask(
      task.id,
      {
        title: editedTitle,
        date: editedDate,
        priority: editedPriority
      }
    );

    setIsEditing(false);

  };

  const formattedDate = new Date(
    task.date
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-4
                  transition-all duration-300 hover:border-orange-500/40
                  hover:-translate-y-1">

    {/* Top Row */}
    <div className="flex items-center justify-between">

      <div className="flex items-start gap-5">
        {/* checkbox added and linked to state 
      completed state -> false -> unchecked
      completed state -> true -> checked */}
        <button
          onClick={() => toggleTask(task.id)}
          className={`
            w-8 h-8
            rounded-full
            flex items-center justify-center
            border-[3px]
            transition-all

            ${
              task.completed
                ? "bg-green-500 border-green-500 text-white"
                : "border-orange-500 text-transparent"
            }
          `}
        >
          <span className='text-lg font-black'>
            ✓
          </span>
          
        </button>

        {
          isEditing ? (

            <input
              type="text"
              value={editedTitle}
              onChange={(e) =>
                setEditedTitle(e.target.value)
              }
              className="bg-zinc-700 text-white px-2 py-1 rounded"
              />

          ) : (

            <div>
              <p
                className={`text-2xl font-semibold text-white ${
                  task.completed
                    ? "line-through opacity-50"
                    : ""
                }`}
              >
                {task.title}
              </p>

              <div className="flex items-center gap-4 mt-3">

                <p className="text-base text-zinc-500">
                  📅 {formattedDate}
                </p>

                <span className="text-zinc-500 text-lg">
                  |
                </span>

                <span
                  className={`
                    px-4 py-1.5 rounded-full text-sm font-medium

                    ${
                      task.priority === "High"
                        ? "bg-red-500/20 text-red-400"
                        : task.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }
                  `}
                >
                   {task.priority}
                </span>

              </div>

            </div>

        )
      }
    </div>

      {
        isEditing ? (
          <div className="flex gap-3">
            <button
              type='button'
              onClick={saveTask}
              className="text-green-400"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => {

                setEditedTitle(task.title);

                setEditedDate(task.date);

                setEditedPriority(task.priority);

                setIsEditing(false);

              }}
              className="text-yellow-400"
            >
              Cancel
            </button>

          </div>

        ) : (

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="text-zinc-400 hover:text-white text-xl"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => deleteTask(task.id)}
              className="text-zinc-400 hover:text-red-400 text-xl"
            >
              Delete
            </button>

        </div>

      )
    }

    </div>

    {
  isEditing && (

    <div className="mt-3 ml-12 flex items-center gap-3">

      <input
        type="date"
        value={editedDate}
        onChange={(e) =>
          setEditedDate(e.target.value)
        }
        className="bg-zinc-700 text-white px-2 py-1 rounded"
      />

      <select
        value={editedPriority}
        onChange={(e) =>
          setEditedPriority(e.target.value)
        }
        className="bg-zinc-700 text-white px-2 py-1 rounded"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

    </div>

  )
}

  </div>
)
}

export default TaskItem