import axios from 'axios';
// import nodemailer from 'nodemailer';

const TOKEN = process.env.BOT_TOKEN;
const ID = process.env.CHAT_ID;

// async function sendEmail(data) {
//   // Create a Nodemailer transporter
//   const {
//     first_name: name,
//     last_name: lastName,
//     phone_number: phone,
//     email,
//     city,
//     zip_code: zipCode,
//     hear_about_us: hearAbout,
//     first_exp: firstExp,
//     description,
//   } = data;
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'limelaudio@gmail.com', // Enter your Gmail email address
//       pass: '081092October8', // Enter your Gmail password
//     },
//   });

//   // Prepare the email message
//   const text = `You get a new message from your websites: \nName: ${ name }\nLast Name: ${ lastName }\nPhone: ${ phone }\nEmail: ${ email }\nCity: ${ city }\nZip Code: ${ zipCode }\nHear about us from: ${ hearAbout }\nFirst experience: ${ firstExp ? 'yes' : 'no' }\nMessage: ${ description }\nfollow this link to check \nhttp://acumen-handyman.com:1337/admin/content-manager/collectionType/api::order.order?page=1&pageSize=10&sort=first_name:ASC`;

//   const mailOptions = {
//     from: 'limelaudio@gmail.com',
//     to: 'andreynazarenko.webdev@gmail.com', // Enter the destination email address
//     subject: 'Duplicate Order Form Data',
//     text,
//   };

//   // Send the email
//   await transporter.sendMail(mailOptions);
// }

export default async function handler(req, res) {
  const { method } = req;
  if (method === 'POST') {
    const { data } = req.body;
    try {
      const {
        first_name: name,
        last_name: lastName,
        phone_number: phone,
        email,
        city,
        zip_code: zipCode,
        hear_about_us: hearAbout,
        first_exp: firstExp,
        description,
      } = data;
      const text = `You get a new message from your websites: \nName: ${ name }\nLast Name: ${ lastName }\nPhone: ${ phone }\nEmail: ${ email }\nCity: ${ city }\nZip Code: ${ zipCode }\nHear about us from: ${ hearAbout }\nFirst experience: ${ firstExp ? 'yes' : 'no' }\nMessage: ${ description }\nfollow this link to check \nhttp://acumen-handyman.com:1337/admin/content-manager/collectionType/api::order.order?page=1&pageSize=10&sort=first_name:ASC`;
      const url = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
      await axios.post(url, {
        chat_id: ID,
        text,
      });

      const response = await axios.post(`${ process.env.BACK_URL }/api/orders`, {
        data,
      });

      // await sendEmail(data);

      return res.status(201).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
