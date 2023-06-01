import axios from 'axios';

export default async function createEntity(data) {
  const response = await axios.post('http://localhost:1337/api/orders', {
    data,
  });
  return response.data;
}
