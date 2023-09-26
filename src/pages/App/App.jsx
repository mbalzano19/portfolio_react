import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import Contact from '../ContactPage/ContactPage';
import Projects from '../Projects/Projects';
import BioPage from '../BioPage/BioPage';

export default function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  // Load user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Update localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const isHomePage = location.pathname === '/';

  return (
    <main className="App">
      {user && !isHomePage && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage setUser={setUser} />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
