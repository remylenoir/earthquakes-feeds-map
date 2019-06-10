import React, { useEffect, useContext } from 'react';

// App contexts (states)
import { FilterContext, DataContext } from './Store';

// App services
import getData from './services/earthquakes';

// App components
import MapView from './components/Map/View';
import FormFilter from './components/Form/Filter';
import { Heading1 } from './components/UI/Headings';

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
    <main className='main-container d-flex'>
      <aside className='sidebar'>
        <Heading1 className='m-0 text-center'>Earthquakes Feeds Map</Heading1>
        <FormFilter />
      </aside>

      <section className='map-container vw-75'>
        <MapView />
      </section>
    </main>
  );
};

export default App;
