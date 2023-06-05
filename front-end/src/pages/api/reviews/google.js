import axios from 'axios';

export default async function handler(req, res) {
  const apiToken = req.headers.authorization;

  if (apiToken !== `Beraer ${ process.env.GOOGLE_API_KEY }`) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${ process.env.GOOGLE_PLACE_ID }&fields=reviews&sort_by=newestFirst &key=${ process.env.GOOGLE_API_KEY }`);
    const { data } = response;
    if (data.status === 'OK') {
      res.status(200).json(data.result.reviews);
    }
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
