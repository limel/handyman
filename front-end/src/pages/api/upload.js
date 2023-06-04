import axios from 'axios';
import FormData from 'form-data';
import formidable from 'formidable';
import fs from 'fs-extra';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // if (req.method === 'POST') {
  //   try {
  //     const form = new formidable.IncomingForm();
  //     form.parse(req, async (err, fields, files) => {
  //       if (err) {
  //         console.error(err);
  //         res.status(500).json({ error: 'Failed to parse form data' });
  //         return;
  //       }

  //       const { file } = files;

  //       console.log(file);
  //       // Create a FormData object
  //       const formData = new FormData();
  //       formData.append('files', fs.createReadStream(file.path));

  //       // Make a POST request to Strapi upload endpoint
  //       const response = await axios.post('http://127.0.0.1:1337/api/upload', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });

  //       // Check the response from Strapi
  //       if (response.status === 200) {
  //         res.status(200).json({ message: 'File uploaded successfully' });
  //       } else {
  //         res.status(500).json({ error: 'Failed to upload file to Strapi' });
  //       }
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'An error occurred while uploading the file' });
  //   }
  // } else {
  //   res.status(405).json({ error: 'Method not allowed' });
  // }
}
