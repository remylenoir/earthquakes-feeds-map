import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { FilterContext, DataContext, MapContext, PopupContext } from '../../Store';

// App components
import MapPopup from './Popup';

// App utilities
import { magColors } from '../../utilities/colors';

// External packages
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapView = () => {
  const [filter] = useContext(FilterContext);
  const [data] = useContext(DataContext);
  const [viewport, setViewport] = useContext(MapContext);
  const [, setPopup] = useContext(PopupContext);

  // Auto resize logic for react-map-gl
  const _resize = () => {
    setViewport({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', _resize);
    _resize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={viewport => setViewport(viewport)}
    >
      {data &&
        data.records.slice(0, filter.amount).map(record => {
          const longitude = record.geometry.coordinates[0];
          const latitude = record.geometry.coordinates[1];

          // Change the circles radius depending on the magnitude
          const { mag } = record.properties;
          const magSize = Math.floor(mag * 20);

          return (
            <Marker key={record.id} latitude={latitude} longitude={longitude}>
              <div
                className='d-flex map-marker'
                onClick={event => {
                  event.preventDefault();
                  setPopup(record);
                }}
              >
                <div
                  className='position-absolute p-20 radius-50'
                  style={{
                    width: magSize,
                    height: magSize,
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

      <MapPopup />
    </ReactMapGl>
  );
};

export default MapView;