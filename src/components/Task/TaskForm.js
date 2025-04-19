'use client';
import { useState } from 'react';
import { useTasks } from '../../contexts/TaskContext';

export default function TaskForm() {
  // Initialize with empty string instead of undefined
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Task title"
          value={title} // Now always controlled
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Task description"
          value={description} // Now always controlled
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
        />
      </div>
      <button type="submit" className="submit-btn">
        Add Task
      </button>
    </form>
  );
}