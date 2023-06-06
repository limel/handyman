import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://data.accentapi.com/feed/150849.json?nocache=1685982129323');

    if (response.status === 200) {
      const { data } = response;
      res.status(200).json(data.reviews);
    }
  } catch (error) {
    console.error('Error fetching Thumbtack Reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
