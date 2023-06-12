import axios from 'axios';
// import nodemailer from 'nodemailer';

// async function sendEmail(data) {
//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'limelaudio@gmail.com', // Enter your Gmail email address
//       pass: '081092October8', // Enter your Gmail password
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   // Prepare the email message
//   const mailOptions = {
//     from: 'limelaudio@gmail.com',
//     to: 'andreynazarenko.webdev@gmail.com', // Enter the destination email address
//     subject: 'Duplicate Order Form Data',
//     text: JSON.stringify(data),
//   };

//   // Send the email
//   await transporter.sendMail(mailOptions);
// }

export default async function handler(req, res) {
  const { method } = req;
  if (method === 'POST') {
    const { data } = req.body;
    try {
      const response = await axios.post(`${ process.env.BACK_URL }/api/orders`, {
        data,
      });

      // await sendEmail(data);
      return res.status(201).json(response.data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
