import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { PopupContext } from '../../Store';

// App components
import { Heading4 } from '../../components/UI/Headings';

// External packages
import moment from 'moment';
import { Popup } from 'react-map-gl';

const MapPopup = () => {
  const [popup, setPopup] = useContext(PopupContext);

  // Close the Popup when the ESC key is pressed
  useEffect(() => {
    const listener = event => {
      if (event.key === 'Escape') {
        setPopup(null);
      }
    };
    window.addEventListener('keydown', listener);
  }, [setPopup]);

  const renderPopup = () => {
    return (
      popup && (
        <Popup
          latitude={popup.geometry.coordinates[1]}
          longitude={popup.geometry.coordinates[0]}
          onClose={() => setPopup(null)}
          tipSize={13}
          offsetTop={-8}
          offsetLeft={9}
        >
          <div className='popup'>
            <div className='popup__header'>
              <Heading4 className='m-0 text-center'>
                Magnitude: {popup.properties.mag.toFixed(1)}
              </Heading4>
            </div>
            <div className='popup__inner'>
              <p className='m-0'>
                When:{' '}
                {moment(popup.properties.time)
                  .startOf('min')
                  .fromNow()}
              </p>
              <p className='m-0'>Where: {popup.properties.place}</p>
              <p className='m-0'>Type: {popup.properties.type}</p>
              <p className='text-center popup__link'>
                <a href={popup.properties.url} target='blank' className='d-flex m-0'>
                  +
                </a>
              </p>
            </div>
          </div>
        </Popup>
      )
    );
  };

  return renderPopup();
};

export default MapPopup;
