import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${ process.env.BACK_URL }/api/content-type-builder/content-types/api::order.order`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
