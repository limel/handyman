import axios from 'axios';

const getGoogleReviews = async () => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${ process.env.GOOGLE_PLACE_ID }&fields=reviews&sort_by=newestFirst &key=${ process.env.GOOGLE_API_KEY }`);
    const { data } = response;
    if (data.status === 'OK') {
      return (data.result.reviews);
    }
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    throw error;
  }
  return null;
};

const getYelpReviews = async () => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ process.env.YELP_API_KEY }`,
    },
  };
  try {
    const response = await axios.get('https://api.yelp.com/v3/businesses/acumen-handyman-seattle/reviews?limit=20&sort_by=yelp_sort', options);
    if (response.status === 200) {
      const { data } = response;
      return (data.reviews);
    }
  } catch (error) {
    console.error('Error fetching Yelp Reviews:', error);
    throw error;
  }
  return null;
};

const getThumbtackReviews = async () => {
  try {
    const response = await axios.get('https://data.accentapi.com/feed/150849.json?nocache=1685982129323');

    if (response.status === 200) {
      const { data } = response;
      return (data.reviews);
    }
  } catch (error) {
    console.error('Error fetching Thumbtack Reviews:', error);
    throw error;
  }
  return null;
};

export {
  getGoogleReviews,
  getYelpReviews,
  getThumbtackReviews,
};
