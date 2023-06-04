import axios from 'axios';

export default async function handler(files) {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response = await axios.post(`${ process.env.BACK_URL }/api/upload/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error.message || 'Server error');
    throw error;
  }
}
