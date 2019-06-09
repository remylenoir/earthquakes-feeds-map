import React, { useState, useEffect } from 'react';

// App utilities
import { magColors } from '../../utilities/colors';

// External packages
import moment from 'moment';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';

const MapView = ({ data, filter }) => {
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

  return (
    <ReactMapGl
      {...mapViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={mapViewport => setMapViewport(mapViewport)}
    >
      {data &&
        data.records.slice(0, filter.amount).map(record => {
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
  );
};

export default MapView;
