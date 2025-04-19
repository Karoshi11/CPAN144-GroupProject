'use client';
import { useState, useEffect } from 'react';
import NavbarLink from './NavbarLink';
import { useTasks } from '../../contexts/TaskContext';
import styles from '../../styles/globals.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTasks();

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavbarLink href="/" className="navbar-logo">
          TaskMaster
        </NavbarLink>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <NavbarLink href="/tasks">Tasks</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}