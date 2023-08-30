// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [availabilityData, setAvailabilityData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  // ... other data states

  return (
    <DataContext.Provider
      value={{
        userData,
        setUserData,
        availabilityData,
        setAvailabilityData,
        servicesData,
        setServicesData,
        // ... other data states
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
