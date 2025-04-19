'use client';
import { useTasks } from '../../contexts/TaskContext';
import Link from 'next/link';

export default function TaskDetail({ task }) {
  const { toggleComplete, deleteTask } = useTasks();

  return (
    <div className="task-detail">
      <div className="detail-header">
        <h1>{task.title}</h1>
        <div className="detail-actions">
          <button
            onClick={() => toggleComplete(task.id)}
            className={`status-btn ${task.completed ? 'completed' : ''}`}
          >
            {task.completed ? 'Mark Pending' : 'Mark Complete'}
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="delete-btn"
          >
            Delete Task
          </button>
        </div>
      </div>

      {task.description && (
        <div className="detail-description">
          <h3>Description</h3>
          <p>{task.description}</p>
        </div>
      )}

      <div className="detail-meta">
        <div className="meta-item">
          <span className="meta-label">Status:</span>
          <span className={`meta-value ${task.completed ? 'completed' : 'pending'}`}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Created:</span>
          <span className="meta-value">
            {new Date(task.createdAt).toLocaleString()}
          </span>
        </div>
      </div>

      <Link href="/tasks" className="back-link">
        ← Back to all tasks
      </Link>
    </div>
  );
}