import React, { useState, createContext } from 'react';

// Create and export the Contexts
export const FilterContext = createContext();
export const DataContext = createContext();
export const MapContext = createContext();
export const PopupContext = createContext();

const Store = ({ children }) => {
  // Create the initial states and functions
  const [filter, setFilter] = useState({ amount: 3, timeRange: 'all_day' });

  const [data, setData] = useState({
    records: []
  });

  const [viewport, setViewport] = useState({
    // latitude: 46.581314,
    longitude: 60,
    zoom: 1,
    bearing: 0,
    pitch: 0,
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [popup, setPopup] = useState(null);

  return (
    // The application is wrapped by the Providers
    <FilterContext.Provider value={[filter, setFilter]}>
      <DataContext.Provider value={[data, setData]}>
        <MapContext.Provider value={[viewport, setViewport]}>
          <PopupContext.Provider value={[popup, setPopup]}>{children}</PopupContext.Provider>
        </MapContext.Provider>
      </DataContext.Provider>
    </FilterContext.Provider>
  );
};

export default Store;
