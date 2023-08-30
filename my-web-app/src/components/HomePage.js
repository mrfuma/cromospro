import React from 'react';
import AboutMe from './AboutMe'; // Replace with your actual components
import AvailabilitiesList from './Disponibilita'; // Replace with your actual components
import ServicesList from './Servizi'; // Replace with your actual components
import Calendar from 'react-calendar'; // Import the react-calendar component
import MyCalendar from './MyCalendar'; // Replace with your actual components

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Cromos Pro</h1>
      <div className="sections-container">
        <div className="section">
          <AboutMe />
        </div>
        <div className="section">
          <AvailabilitiesList />
        </div>
        <div className="section">
          <ServicesList />
        </div>
        <div className="section">
          <MyCalendar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;