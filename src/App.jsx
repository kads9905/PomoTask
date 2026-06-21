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


  return (
    <div className="h-screen bg-black p-8">

      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

        {/* Left Side */}
        <div className="lg:col-span-8">

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

          <TaskList 
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
            filter={filter}
            searchTerm={searchTerm}
          />

        </div>

        {/* Right Side */}
        <div className="lg:col-span-4">

          <Pomodoro />

        </div>

      </div>

    </div>
  )
}

export default App