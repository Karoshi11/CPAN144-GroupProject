'use client';
import { TaskProvider } from '../contexts/TaskContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TaskProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </TaskProvider>
      </body>
    </html>
  );
}