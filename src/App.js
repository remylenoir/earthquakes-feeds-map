import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { FilterContext, DataContext } from './Store';

// App services
import getData from './services/earthquakes';

// App utilities
import { magColors } from './utilities/colors';

// App components
import MapView from './components/Map/View';
import FormFilter from './components/Form/Filter';

const App = () => {
  const [filter] = useContext(FilterContext);
  const [, setData] = useContext(DataContext);

  // Get the data from the API and update the context's state
  useEffect(() => {
    getData(filter.timeRange)
      //    ^^^ passing the time range from the filter to load the corresponding data
      .then(records => setData({ records }))
      .catch(error => console.error(error));
  }, [filter, setData]);

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

        <FormFilter />

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
        <MapView />
      </div>
    </div>
  );
};

export default App;
