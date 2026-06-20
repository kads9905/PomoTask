import React from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { useState } from 'react';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Build Pomotask",
      completed: true
    },
    {
      id: 3,
      title: "Learn Tailwind",
      completed: false
    }
  ]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      newTask
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };

  return (
    <div className="h-screen bg-black p-8">

      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

        {/* Left Side */}
        <div className="lg:col-span-8">

          <SummaryCard />

          <div className="mt-6">
            <AddTaskForm addTask={addTask}/>
          </div>

          <TaskList 
            tasks={tasks}
            toggleTask={toggleTask}
          />

        </div>

        {/* Right Side */}
        <div className="lg:col-span-4">

          <div className="border border-zinc-800 rounded-xl p-6">
            Sidebar Area
          </div>

        </div>

      </div>

    </div>
  )
}

export default App