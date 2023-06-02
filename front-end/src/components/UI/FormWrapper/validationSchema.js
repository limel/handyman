import * as Yup from 'yup';

const phoneRegEx = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
const ValidataionSchema = Yup.object().shape({
  first_name: Yup.string().min(3).required('Name is required'),
  last_name: Yup.string().min(3).required('Name is required'),
  phone_number: Yup.string().required('Phone number is required').matches(phoneRegEx, 'Phone number is not valid'),
  email: Yup.string().email('Invalid email').required('Email is required').matches(emailRegex, 'Email is not valid'),
  city: Yup.string().min(3).required('City is required'),
  zip_code: Yup.string().min(3).required('Zip code is required').matches(zipCodePattern, 'Zip code is not valid'),
  hear_about_us: Yup.string().required('Hear about us is required'),
  upload_file: Yup.array().of(
    Yup.mixed().test(
      'fileFormat',
      'wrong format',
      (value) => {
        if (!value) return true; // Skip validation if no file is provided
        const supportedFormats = [ 'image/jpeg', 'image/png', 'application/pdf' ];
        return supportedFormats.includes(value.type);
      },
    ).test(
      'fileSize',
      'image is too big',
      (value) => {
        if (!value) return true; // Skip validation if no file is provided
        const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
        return value.size <= maxSizeInBytes;
      },
    ),
  ),
});

export default ValidataionSchema;
