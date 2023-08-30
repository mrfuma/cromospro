// DisplayAboutMe.js
import React from 'react';

const DisplayAboutMe = ({ photo, description, cities }) => {
  return (
    <div>
      <h2>About Me</h2>
      <div>
        {/* Display uploaded photo */}
        {photo && <img src={photo} alt="Uploaded" />}
      </div>
      <div>
        {/* Display user description */}
        <p>{description}</p>
      </div>
      <div>
        <h3>Cities:</h3>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayAboutMe;
