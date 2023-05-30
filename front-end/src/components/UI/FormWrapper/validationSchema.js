import * as Yup from 'yup';

const ValidataionSchema = Yup.object().shape({
  first_name: Yup.string().min(3).required('Name is required'),
  last_name: Yup.string().min(3).required('Name is required'),
  phone_number: Yup.string().required('Phone number is required').matches(' /^\\+?[1-9]\\d{1,14}$/', 'Phone number is not valid'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  city: Yup.string().min(3).required('City is required'),
  zip_code: Yup.string().min(3).required('Zip code is required'),
  // hear_about_us: Yup.string().min(3).required('Hear about us is required'),

});

export default ValidataionSchema;
