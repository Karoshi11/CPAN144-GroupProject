import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <h1>About TaskMaster</h1>
        <p>A simple task management application to help you stay organized.</p>
      </main>
    </div>
  );
}
