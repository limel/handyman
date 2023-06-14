import axios from 'axios';

export default async function getContacts() {
  try {
    const response = await axios.get(`${ process.env.BACK_URL }/api/contact?populate=*`);
    const { data: { attributes } } = response.data;
    return attributes;
  } catch (error) {
    throw error;
  }
}
