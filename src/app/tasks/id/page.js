'use client';
import { useTasks } from '../../contexts/TaskContext';
import TaskDetail from '../../components/Task/TaskDetail';

export default function TaskDetailPage({ params }) {
  const { tasks } = useTasks();
  const task = tasks.find(t => t.id === params.id);

  if (!task) return <div>Task not found</div>;

  return (
    <div className="container">
      <TaskDetail task={task} />
    </div>
  );
}