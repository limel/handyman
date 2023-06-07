import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${ process.env.BACK_URL }/api/contact?populate=*`);
    const { data: { attributes } } = response.data;
    res.status(200).json(attributes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
