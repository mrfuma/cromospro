import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/servizi">Servizi</NavLink></li>
        <li><NavLink to="/disponibilita">Disponibilità</NavLink></li>
        <li><NavLink to="/appuntamenti">Appuntamenti</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
