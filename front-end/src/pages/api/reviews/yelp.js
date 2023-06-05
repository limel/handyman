import axios from 'axios';

export default async function handler(req, res) {
  const authorizationKey = req.headers.authorization;
  const yelpApiKey = `Beraer ${ process.env.YELP_API_KEY }`;
  if (yelpApiKey !== authorizationKey) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

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
      res.status(200).json(data.reviews);
    }
  } catch (error) {
    console.error('Error fetching Yelp Reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
