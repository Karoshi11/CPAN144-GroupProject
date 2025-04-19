'use client';
import { useTasks } from '../../contexts/TaskContext';
import TaskCard from './TaskCard';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks yet. Add your first task!</p>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}