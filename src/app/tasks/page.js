'use client';
import { useTasks } from '../../contexts/TaskContext';
import TaskCard from '../../components/Task/TaskCard';

export default function TasksPage() {
  const { tasks } = useTasks();

  return (
    <div className="page-container">
      <h1>Your Tasks</h1>
      <div className="tasks-grid">
        {tasks.length === 0 ? (
          <p>No tasks yet. Create your first task!</p>
        ) : (
          tasks.map(task => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}