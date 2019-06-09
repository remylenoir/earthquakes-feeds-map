// External packages
import axios from 'axios';

const getEarthquakes = async filter => {
  try {
    const response = await axios.get(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${filter}.geojson`
    );
    return response.data.features;
  } catch (error) {
    return console.error(error);
  }
};

export default getEarthquakes;
