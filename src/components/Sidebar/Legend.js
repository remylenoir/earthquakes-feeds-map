import React from 'react';

// App utilities
import { magColors } from '../../utilities/colors';

const SidebarLegend = () => {
  return (
    <>
      <label className='d-inline-block w-100'>
        Legend:{' '}
        <small>
          <a
            href='https://en.wikipedia.org/wiki/Richter_magnitude_scale#Richter_magnitudes'
            target='_blank'
            rel='noopener noreferrer'
          >
            More information
          </a>
        </small>{' '}
      </label>
      <div className='filter__legend-container'>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag0 }}>
          &lt; 1
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag1 }}>
          Between 1 and 2
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag2 }}>
          Between 2 and 3
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag3 }}>
          Between 3 and 4
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag4 }}>
          Between 4 and 5
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag5 }}>
          Between 5 and 6
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag6 }}>
          Between 6 and 7
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag7 }}>
          Between 7 and 8
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag8 }}>
          Between 8 and 9
        </div>
        <div className='filter__legend-line' style={{ backgroundColor: magColors.mag9, color: '#fff' }}>
          &gt; 9
        </div>
      </div>
    </>
  );
};

export default SidebarLegend;
