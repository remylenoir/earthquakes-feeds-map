import React, { useState, useEffect } from 'react';

// App components
import MapView from './components/Map/View';

// App services
import getEarthquakes from './services/earthquakes';

// App utilities
import { magColors } from './utilities/colors';

const App = () => {
  // ### EARTHQUAKES STATE ###
  const [earthquakesRecords, setEarthquakesRecords] = useState({
    records: []
  });

  // ### FORM STATE ###
  const [filter, setFilter] = useState({ amount: 1, timeRange: 'all_day' });

  // Update the EQ Records State with the data from the API
  // + passing the time range from the filter as an argument to the getEarthquakes function
  useEffect(() => {
    getEarthquakes(filter.timeRange)
      .then(records => setEarthquakesRecords({ records }))
      .catch(error => console.error(error));
  }, [filter]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '25vw',
          maxHeight: '100vw',
          backgroundColor: 'lightgrey',
          padding: '0 20px'
        }}
      >
        <h1>Earthquakes records</h1>
        <h2>Filters</h2>
        <form>
          <div>
            <label htmlFor='amount'>Display range</label>
            <div>
              <span>1</span>
              <input
                type='range'
                min='1'
                max={earthquakesRecords && earthquakesRecords.records.length}
                value={filter.amount}
                name='amount'
                onChange={handleChange}
              />
              <span>{earthquakesRecords && earthquakesRecords.records.length}</span>
            </div>
          </div>
          <hr />
          <div>
            <label htmlFor='timeRange'>Time range</label>{' '}
            <div>
              <select name='timeRange' value={filter.timeRange} onChange={handleChange}>
                <option value='all_hour'>Past hour</option>
                <option value='all_day'>Past day</option>
                <option value='all_week'>Past 7 days</option>
                <option value='all_month'>Past 30 days</option>
              </select>
            </div>
          </div>
        </form>

        <hr />

        <p>
          Displaying <b>{filter.amount}</b> of{' '}
          <b>{earthquakesRecords && earthquakesRecords.records.length}</b> earthquakes from the past{' '}
          {(filter.timeRange === 'all_hour' && 'hour') ||
            (filter.timeRange === 'all_day' && 'day') ||
            (filter.timeRange === 'all_week' && 'week') ||
            (filter.timeRange === 'all_month' && 'month')}
          {'.'}
        </p>

        <hr />

        <h3>Legend</h3>
        <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ backgroundColor: magColors.mag0, padding: '3px 7px' }}>&lt; 1</div>
          <div style={{ backgroundColor: magColors.mag1, padding: '3px 7px' }}>Between 1 and 2</div>
          <div style={{ backgroundColor: magColors.mag2, padding: '3px 7px' }}>Between 2 and 3</div>
          <div style={{ backgroundColor: magColors.mag3, padding: '3px 7px' }}>Between 3 and 4</div>
          <div style={{ backgroundColor: magColors.mag4, padding: '3px 7px' }}>Between 4 and 5</div>
          <div style={{ backgroundColor: magColors.mag5, padding: '3px 7px' }}>Between 5 and 6</div>
          <div style={{ backgroundColor: magColors.mag6, padding: '3px 7px' }}>Between 6 and 7</div>
          <div style={{ backgroundColor: magColors.mag7, padding: '3px 7px' }}>Between 7 and 8</div>
          <div style={{ backgroundColor: magColors.mag8, padding: '3px 7px' }}>Between 8 and 9</div>
          <div style={{ backgroundColor: magColors.mag9, color: '#fff', padding: '3px 7px' }}>
            &gt; 9
          </div>
        </div>
      </div>

      <div style={{ width: '75vw', height: '100vh' }}>
        <MapView data={earthquakesRecords} filter={filter} />
      </div>
    </div>
  );
};

export default App;
