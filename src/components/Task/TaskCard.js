'use client';
import Link from 'next/link';
import { useTasks } from '../../contexts/TaskContext';

export default function TaskCard({ task }) {
  const { toggleComplete, deleteTask } = useTasks();

  return (
    <div className="task-card">
      <Link href={`/tasks/${task.id}`}>
        <h3>{task.title}</h3>
        <p>{task.description || 'No description'}</p>
      </Link>
      <div className="task-actions">
        <button
          onClick={() => toggleComplete(task.id)}
          className={`status-btn ${task.completed ? 'completed' : ''}`}
        >
          {task.completed ? '✓' : '◯'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
}