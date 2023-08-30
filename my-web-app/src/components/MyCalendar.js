import React from 'react';
import Calendar from 'react-calendar'; // Import the react-calendar component
import 'react-calendar/dist/Calendar.css'; // Import the calendar's CSS

const MyCalendar = () => {
  return (
    <div>
      <h2>Calendar</h2>
      <Calendar /> {/* Use the Calendar component here */}
    </div>
  );
};

export default MyCalendar;
