import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    const res = await axios.post("/api/tasks", { title });
    setTasks([...tasks, res.data]);
  };

  const toggleTask = async (id, completed) => {
    const res = await axios.put(`/api/tasks/${id}`, { completed });
    setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="container">
      <h1>MERN To-Do App ✅</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

