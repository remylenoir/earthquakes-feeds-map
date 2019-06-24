import React from 'react';

// App utilities
import { colors } from '../../utilities/magnitude';

const SidebarLegend = () => {
  const legendColors = colors.map((color, index) => {
    const className = 'filter__legend-line';

    if (index === 0) {
      return (
        <div key={index} className={className} style={{ backgroundColor: color }}>
          &lt; {index}
        </div>
      );
    } else if (index === 9) {
      return (
        <div key={index} className={className} style={{ backgroundColor: color, color: '#fff' }}>
          &gt; {index}
        </div>
      );
    } else {
      return (
        <div key={index} className={className} style={{ backgroundColor: color }}>
          Between {index} and {index + 1}
        </div>
      );
    }
  });

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
      <div className='filter__legend-container'>{legendColors}</div>
    </>
  );
};

export default SidebarLegend;
