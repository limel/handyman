import axios from 'axios';
// import uploadFiles from './upload-file';

export default async function handler(req, res) {
  console.log(req.body);
  console.log(req.headers);
  const post = await axios('http://localhost:1337/api/orders').then(({ data }) => data);
  console.log(post);
  return res.status(200).json(post);
  // res.status(201).json({ name: 'John Doe' });

  // const headers = {

  // };

  // try {
  //   const response = await fetch('https://your-strapi-url.com/api/endpoint', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(req.body),
  //   });

  //   const data = await response.json();
  //   // Process the response data as needed
  //   res.status(200).json(data);
  // } catch (error) {
  //   // Handle any errors that occurred during the request
  //   res.status(500).json({ error: 'An error occurred' });
  // }
}
// return res.status(404).json({ error: 'Resource not found' });

// try {
//   const files = Array.isArray(orderData.upload_files)
//     ? orderData.upload_file : [ orderData.upload_file ];
//   // Pass the files array to the uploadFiles function
//   const uploadedFiles = await uploadFiles(files);
//   console.log('uploadedFiles:', uploadedFiles);
//   const payload = {
//     data: {
//       ...orderData,
//       upload_file: uploadedFiles.map((file) => file.id),
//     },
//   };
//   const response = await axios.post(`${ API_URL }/api/orders`, payload);
//   return response.data;
// } catch (error) {
//   console.error('Error creating order:', error);
//   throw error;
// }
