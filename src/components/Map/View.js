import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { FilterContext, DataContext, MapContext, PopupContext } from '../../Store';

// App components
import MapPopup from './Popup';

// App utilities
import { colors } from '../../utilities/magnitude';

// External packages
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapView = () => {
  const [filter] = useContext(FilterContext);
  const [data] = useContext(DataContext);
  const [viewport, setViewport] = useContext(MapContext);
  const [, setPopup] = useContext(PopupContext);

  // Assign the color to the circles on the map depending on the magnitude
  const magColor = input => {
    const integerNumber = parseInt(input);
    const legendColors = colors.map(color => color);
    return legendColors[integerNumber];
  };

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
        data.records.slice(0, filter.range).map(record => {
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
                    backgroundColor: magColor(mag),
                    opacity: 0.3
                  }}
                />
                <div>{mag.toFixed(1)}</div>
              </div>
            </Marker>
          );
        })}

      <MapPopup />
    </ReactMapGl>
  );
};

export default MapView;
