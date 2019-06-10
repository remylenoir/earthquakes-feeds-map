// External packages
import axios from 'axios';

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

export default getData;
