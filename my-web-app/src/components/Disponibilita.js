import React, { useState } from 'react';

const Disponibilita = () => {
  const [availability, setAvailability] = useState([]);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities] = useState(['City 1', 'City 2', 'City 3']);
  const [feedback, setFeedback] = useState('');

  const handleAddAvailability = () => {
    if (date && startTime && endTime && selectedCity) {
      const newAvailability = {
        date: date,
        startTime: startTime,
        endTime: endTime,
        city: selectedCity,
      };
      setAvailability([...availability, newAvailability]);
      setDate('');
      setStartTime('');
      setEndTime('');
      setSelectedCity('');
      setFeedback('Availability added successfully.');
    } else {
      setFeedback('Please fill in all fields.');
    }
  };

  const handleDeleteAvailability = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability.splice(index, 1);
    setAvailability(updatedAvailability);
    setFeedback('Availability deleted.');
  };

  return (
    <div>
      <h2>Disponibilità</h2>
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
        <label>City: </label>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddAvailability}>Add Availability</button>
      <p>{feedback}</p>
      <ul>
        {availability.map((item, index) => (
          <li key={index}>
            {item.date} | {item.startTime}-{item.endTime} | {item.city}
            <button onClick={() => handleDeleteAvailability(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Disponibilita;
