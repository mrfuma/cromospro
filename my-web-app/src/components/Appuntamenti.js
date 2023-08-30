import React, { useState } from 'react';

const Appuntamenti = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [services] = useState(['Service 1', 'Service 2', 'Service 3']);
  const [feedback, setFeedback] = useState('');

  const handleAddAppointment = () => {
    if (date && startTime && endTime && selectedService) {
      const newAppointment = {
        date: date,
        startTime: startTime,
        endTime: endTime,
        service: selectedService,
      };
      setAppointments([...appointments, newAppointment]);
      setDate('');
      setStartTime('');
      setEndTime('');
      setSelectedService('');
      setFeedback('Appointment added successfully.');
    } else {
      setFeedback('Please fill in all fields.');
    }
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    setFeedback('Appointment deleted.');
  };

  return (
    <div>
      <h2>Appuntamenti</h2>
      <div>
        <label>Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Start Time: </label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </div>
      <div>
        <label>End Time: </label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>
      <div>
        <label>Service: </label>
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddAppointment}>Add Appointment</button>
      <p>{feedback}</p>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.date} | {appointment.startTime}-{appointment.endTime} | {appointment.service}
            <button onClick={() => handleDeleteAppointment(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appuntamenti;

