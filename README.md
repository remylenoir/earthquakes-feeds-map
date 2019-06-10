#:world_map: Earthquakes Feeds Map

##Introduction

The application allows you to visualize real-time worldwide earthquakes feeds from [USGS](https://www.usgs.gov/natural-hazards/earthquake-hazards/earthquakes). 

###Install and run the application

```markdown
npm i ; npm start
```

> By default, the app will start on the `3000` PORT.

You will also need to store a Mapbox public token in a `.env.local` file in order to run the application.

```markdown
REACT_APP_MAPBOX_TOKEN = yourpublictokenhere
```

> More information: [Mapbox API](https://docs.mapbox.com/api/)

------

###Technologies & methodologies
* Node JS
* React
* React Map GL (Mapbox),
* SASS
* BEM, DRY methodologies

###Modules
* axios — [GitHub](https://github.com/axios/axios) | [NPM](https://www.npmjs.com/package/axios)
* moment — [Website](http://momentjs.com/) | [NPM](https://www.npmjs.com/package/moment)
* react-map-gl — [GitHub](https://github.com/uber/react-map-gl#readme) | [NPM](https://www.npmjs.com/package/react-map-gl) 
* node-sass — [GitHub](https://github.com/sass/node-sass) | [NPM](https://www.npmjs.com/package/node-sass) 

###Code structure

The application is using React hooks:
* `useState()`
* `useEffect()`
* `useContext()`

> More information: [hooks reference](https://reactjs.org/docs/hooks-reference.html)

###Data fetching 

The data is fetched using an Axios `GET` request.

> More information: [npm package](https://www.npmjs.com/package/axios)

###Feed logic

In the current version, these feeds are available:
* Past Hour: `all_hour`
* Past Day: `all_day`
* Past Week: `all_week`
* Past Month: `all_month`

> More information: [available feeds](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

------

##Documentation

###Feed

####Default feed

In the application store located at `./src/Store.js`, the initial feed is set to `all_day`.

```javascript
// Store.js
const [filter, setFilter] = useState({ range: 3, timeRange: 'all_day' });
```

####Get and store the data

The `getData()` function is located at `./src/services/earthquakes.js`.

```javascript
// earthquakes.js
const getData = async feed => {
  try {
    const response = await axios.get(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${feed}.geojson`
    );
    return response.data.features;
  } catch (error) {
    return console.error(error);
  }
};
```

In the main component `./src/App.js`, the feed is passed as an argument to the `getData()` function.  

```javascript
// App.js
useEffect(() => {
    getData(filter.timeRange)
      //    ^^^ passing the time range from the filter to load the corresponding data
      .then(records => setData({ records }))
      .catch(error => console.error(error));
  }, [filter, setData]);
```

####Add a feed

You can add a new feed via the `<select>` tag located at `./src/components/Form/Filter.js`.

```javascript
// Filter.js
<select>
  <option value='all_hour'>Past hour</option>
  <option value='all_day'>Past day</option>
  <option value='all_week'>Past 7 days*</option>
  <option value='all_month'>Past 30 days*</option>
</select>
```

> Please ensure you are using the [GeoJSON Summary Format](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).  
> E.G. `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`

------

###Styling

The application is styled via SASS, and using BEM methodology as a naming convention.  
Combining BEM with SASS make the code flow fast and powerful.

```scss
// _mapbox.scss
.mapboxgl {
  &-popup {
    &-content {
      padding: 0;
    }
    &-close-button {
      color: #fff;
      font-size: 1rem;
      height: $popup-header;
    }
  }
}
```

> More information: [SASS guidelines](https://sass-guidelin.es/) — [BEM methodology](https://en.bem.info/methodology/)

####Structure

The application is using the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern).

####Add a SCSS file

You can add a file in the corresponding folders, in `./src/stylesheets/`.  
Please ensure to @import the file in the `./src/stylesheets/main.scss`.

```scss
// main.scss
// Abstracts: global variables, helpers, mixins, etc.
@import './abstracts/helpers';
@import './abstracts/variables';

// Base: global styles (resets, typography, colors, etc)
@import './base/reset';
@import './base/typography';

// Components: styling for each components
@import './components/map';
@import './components/popup';

// Layout: styling for layout components (nav, header, footer, etc)
@import './layout/form';
@import './layout/sidebar';

// Pages: page-specific styling
@import './pages/home';

// Vendors: 3rd-party styles
@import './vendors/mapbox';
```

------

##Future improvements
* Add more feeds/filters
* Refactor the contexts providers logic (to avoid the "wrapper hell")
* Mobile responsiveness