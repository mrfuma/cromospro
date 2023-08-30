import React, { useState } from 'react';

const Servizi = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '' });

  const handleAddService = () => {
    setServices([...services, newService]);
    setNewService({ name: '', description: '' });
  };

  return (
    <section id="servizi">
      <h2>Servizi</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
      <div className="add-service">
        <input
          type="text"
          placeholder="Service Name"
          value={newService.name}
          onChange={e => setNewService({ ...newService, name: e.target.value })}
        />
        <textarea
          placeholder="Service Description"
          value={newService.description}
          onChange={e => setNewService({ ...newService, description: e.target.value })}
        />
        <button onClick={handleAddService}>Add Service</button>
      </div>
    </section>
  );
};

export default Servizi;
