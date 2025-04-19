'use client';
import { useTasks } from '../contexts/TaskContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTasks();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}