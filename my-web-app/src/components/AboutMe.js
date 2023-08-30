import React, { useState } from 'react';

const AboutMe = () => {
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [cities, setCities] = useState([]);
  const [cityInput, setCityInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleAddCity = () => {
    if (cityInput.trim() !== '') {
      setCities([...cities, cityInput]);
      setCityInput('');
      setFeedback('');
    } else {
      setFeedback('Please enter a valid city.');
    }
  };

  return (
    <div>
      <h2>About Me</h2>
      <div>
        <label>Upload Photo: </label>
        {/* Replace with input type file */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
        />
        {/* Show photo preview */}
        {photo && <img src={photo} alt="Uploaded" />}
      </div>
      <div>
        <label>Description: </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          placeholder="Enter description"
        />
        {/* Show character count */}
        <p>Characters remaining: {200 - description.length}</p>
      </div>
      <div>
        <h3>Cities:</h3>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
        <input
          type="text"
          value={cityInput}
          placeholder="Enter city"
          onChange={(e) => setCityInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddCity();
            }
          }}
        />
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default AboutMe;

