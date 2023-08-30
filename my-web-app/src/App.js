import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Servizi from './components/Servizi';
import Disponibilita from './components/Disponibilita';
import Appuntamenti from './components/Appuntamenti';
import HomePage from './components/HomePage'; // Import your home page component
import './styles.css'; // Make sure to adjust the path if necessary

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Add this route for the home page */}
        <Route path="/about" element={<AboutMe />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/disponibilita" element={<Disponibilita />} />
        <Route path="/appuntamenti" element={<Appuntamenti />} />
      </Routes>
    </Router>
  );
}

export default App;
