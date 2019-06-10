import React from 'react';

const SidebarCredits = () => {
  return (
    <>
      <hr />
      <p>
        Real-time feeds from{' '}
        <a
          href='https://www.usgs.gov/natural-hazards/earthquake-hazards/earthquakes'
          rel='noopener noreferrer'
          target='_blank'
        >
          USGS
        </a>{' '}
        <br />
        Updated every minute.
      </p>
    </>
  );
};

export default SidebarCredits;
