import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;
  if (method === 'POST') {
    const { data } = req.body;
    try {
      const response = await axios.post(`${ process.env.BACK_URL }/api/orders`, {
        data,
      });
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
