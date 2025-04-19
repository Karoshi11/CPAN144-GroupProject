'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import TaskList from '../components/Task/TaskList';
import TaskForm from '../components/Task/TaskForm';
import styles from './page.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>My Tasks</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </main>
    </div>
  );
}