import axios from 'axios';

export default async function getServices() {
  try {
    const response = await axios.get(`${ process.env.BACK_URL }/api/services?populate=*`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
