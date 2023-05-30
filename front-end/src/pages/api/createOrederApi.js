// eslint-disable-next-line consistent-return
import axios from 'axios';

const API_URL = process.env.BAKC_URL || 'http://localhost:1337';

const createOrderApi = async (orderData) => {
  try {
    const payload = {
      data: orderData, // Include the order data under the "data" property
    };
    const response = await axios.post(`${ API_URL }/api/orders`, payload);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export default createOrderApi;
