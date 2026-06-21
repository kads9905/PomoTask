import React from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import Pomodoro from './components/Pomodoro';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/tasks"
        );
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(
          "Failed to load tasks"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();

  }, []);

  const addTask = async (newTask) => {
    const response = await fetch(
      "http://localhost:3001/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      }
    );

    const savedTask =
      await response.json();

    setTasks((prevTasks) => [
      ...prevTasks,
      savedTask
    ]);
  };

  const toggleTask = async (id) => {
    const task = tasks.find(
      (task) => task.id === id
    );
    const response = await fetch(
      `http://localhost:3001/tasks/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          completed: !task.completed
        })
      }
    );

    const updatedTask =
      await response.json();

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? updatedTask
          : task
      )
    );
  };

  const deleteTask = async (id) => {
    await fetch(
      `http://localhost:3001/tasks/${id}`,
      {
        method: "DELETE"
      }
    );

    setTasks((prevTasks) =>
      prevTasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const editTask = async (
    id,
    updatedData
  ) => {

    const response = await fetch(
      `http://localhost:3001/tasks/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
      }
    );

    const updatedTask =
      await response.json();

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? updatedTask
          : task
      )
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  let filteredTasks = tasks;

  if (filter === "pending") {
    filteredTasks = tasks.filter(
      (task) => !task.completed
    );
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter(
      (task) => task.completed
    );
  }

  filteredTasks = filteredTasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <h1 className="text-white text-center text-2xl mt-10">
        Loading tasks...
      </h1>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10">

        <h1 className="text-red-500 text-2xl font-bold">
          Failed to load tasks
        </h1>

        <p className="text-zinc-400 mt-2">
          {error}
        </p>

      </div>
    );
  }


  return (
    <div className="h-screen overflow-hidden bg-black p-8 transition-all">

      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

        {/* Left Side */}
        <div className="lg:col-span-8 flex flex-col">

          <SummaryCard 
            completedTasks={completedTasks}
            totalTasks={totalTasks}
          />

          <div className="mt-6">
            <AddTaskForm addTask={addTask}/>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center mt-6 mb-6">

            <FilterBar
              filter={filter}
              setFilter={setFilter}
            />

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

          </div>

          <div className="overflow-y-auto pr-2 h-[55vh] pt-2">

            <div className="pb-20">

              <TaskList 
                tasks={filteredTasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
                filter={filter}
                searchTerm={searchTerm}
              />

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-4 h-[calc(100vh-120px)]">

          <Pomodoro />

        </div>

      </div>

    </div>
  )
}

export default App