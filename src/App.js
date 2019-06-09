import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';

// App services
import getEarthquakes from './Services/earthquakes';

// External packages
import moment from 'moment';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const [mapViewport, setMapViewport] = useState({
    latitude: 46.581314,
    longitude: -107.063199,
    zoom: 2.4,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '100%'
  });

  // ### POPUPS ###
  const [popup, setPopup] = useState(null);

  // Close the Popup when the ESC key is pressed
  useEffect(() => {
    const listener = event => {
      if (event.key === 'Escape') {
        setPopup(null);
      }
    };
    window.addEventListener('keydown', listener);
  }, []);

  // ### EARTHQUAKES ###
  const [earthquakesRecords, setEarthquakesRecords] = useState({
    records: []
  });

  // ### FORM ###
  const [filter, setFilter] = useState({ amount: 5, timeRange: 'all_day' });

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

  const magColors = {
    mag0: '#fff',
    mag1: '#ffffaf',
    mag2: '#fffe4b',
    mag3: '#feff01',
    mag4: '#ffe202',
    mag5: '#ffd101',
    mag6: '#ffad00',
    mag7: '#f96400',
    mag8: '#fe0000',
    mag9: '#800000'
  };

  console.log(mapViewport);

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
            <label htmlFor='amount'>Amount of records displayed</label>{' '}
            <input
              type='range'
              min='1'
              max={earthquakesRecords && earthquakesRecords.records.length}
              value={filter.amount}
              name='amount'
              onChange={handleChange}
            />
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

        <h3>
          Displaying {filter.amount} of {earthquakesRecords && earthquakesRecords.records.length}{' '}
          earthquakes from the past{' '}
          {(filter.timeRange === 'all_hour' && 'hour') ||
            (filter.timeRange === 'all_day' && 'day') ||
            (filter.timeRange === 'all_week' && 'week') ||
            (filter.timeRange === 'all_month' && 'month')}
          {'.'}
        </h3>

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
        <ReactMapGl
          {...mapViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={mapViewport => setMapViewport(mapViewport)}
        >
          {earthquakesRecords &&
            earthquakesRecords.records.slice(0, filter.amount).map(record => {
              const longitude = record.geometry.coordinates[0];
              const latitude = record.geometry.coordinates[1];

              // CHANGE THE CIRCLE'S SIZE DEPENDING ON THE MAGNITUDE
              const { mag } = record.properties;
              const magSize = Math.floor(mag * 20);

              return (
                <Marker key={record.id} latitude={latitude} longitude={longitude}>
                  <div
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '80%'
                    }}
                    onClick={event => {
                      event.preventDefault();
                      setPopup(record);
                    }}
                  >
                    <div
                      style={{
                        width: magSize,
                        height: magSize,
                        borderRadius: '50%',
                        padding: '20px',
                        position: 'absolute',
                        backgroundColor:
                          mag <= 2
                            ? magColors.mag1
                            : mag >= 2 && mag <= 3
                            ? magColors.mag2
                            : mag >= 3 && mag <= 4
                            ? magColors.mag3
                            : mag >= 4 && mag <= 5
                            ? magColors.mag4
                            : mag >= 5 && mag <= 6
                            ? magColors.mag5
                            : mag >= 6 && mag <= 7
                            ? magColors.mag6
                            : mag >= 7 && mag <= 8
                            ? magColors.mag7
                            : mag >= 8 && mag <= 9
                            ? magColors.mag8
                            : mag >= 9
                            ? magColors.mag9
                            : magColors.mag0,
                        opacity: 0.3
                      }}
                    />
                    <div>{mag}</div>
                  </div>
                </Marker>
              );
            })}

          {popup ? (
            <Popup
              latitude={popup.geometry.coordinates[1]}
              longitude={popup.geometry.coordinates[0]}
              onClose={() => setPopup(null)}
              tipSize={15}
              offsetTop={-8}
              offsetLeft={12}
            >
              <div>
                <div>
                  When:{' '}
                  {moment(popup.properties.time)
                    .startOf('min')
                    .fromNow()}
                </div>
                <div>Where: {popup.properties.place}</div>
                <div>Mag: {popup.properties.mag}</div>
                <div>Type: {popup.properties.type}</div>
                <div>
                  <a href={popup.properties.url} target='blank'>
                    More details
                  </a>
                </div>
              </div>
            </Popup>
          ) : null}
        </ReactMapGl>
      </div>
    </div>
  );
};

export default App;
