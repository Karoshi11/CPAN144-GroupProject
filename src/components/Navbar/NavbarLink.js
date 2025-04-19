'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTasks } from '../../contexts/TaskContext';

export default function NavbarLink({ href, children, className = '' }) {
  const pathname = usePathname();
  const { theme } = useTasks();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`navbar-link ${className} ${isActive ? 'active' : ''} ${theme}`}
    >
      {children}
    </Link>
  );
}