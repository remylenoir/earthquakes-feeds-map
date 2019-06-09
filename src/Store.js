import React, { useState, createContext } from 'react';

// Create and export the Contexts
export const FilterContext = createContext();
export const DataContext = createContext();

const Store = ({ children }) => {
  // Create the initial states and functions
  const [filter, setFilter] = useState({ amount: 1, timeRange: 'all_day' });
  const [data, setData] = useState({
    records: []
  });

  return (
    // The application is wrapped by the Providers
    <FilterContext.Provider value={[filter, setFilter]}>
      <DataContext.Provider value={[data, setData]}>{children}</DataContext.Provider>
    </FilterContext.Provider>
  );
};

export default Store;
