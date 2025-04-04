'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          TaskMaster
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link href="/">Tasks</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}