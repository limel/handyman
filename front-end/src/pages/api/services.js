import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${ process.env.BACK_URL }/api/services?populate=*`);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({ error });
  }
}
