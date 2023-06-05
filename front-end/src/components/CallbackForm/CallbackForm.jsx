/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import Steps from '~/components/Steps/';
import FormWrapper from '~/components/UI/FormWrapper';
import Input from '~/components/UI/Input';
import SelectField from '~/components/UI/SelectField';
import RadioGroup from '~/components/UI/RadioGroupe';
import InputFile from '~/components/UI/InputFile';
import axios from 'axios';
import Title from '~/components/UI/Title';
import s from './CallbackForm.module.scss';

const CallbackForm = () => {
  const [ options, setOptions ] = useState([]);
  const initialValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    city: '',
    zip_code: '',
    hear_about_us: '',
    tips_via_email: true,
    first_exp: true,
    description: '',
    upload_image: [],
  };

  useEffect(() => {
    const getOptionsList = async () => {
      try {
        return await axios.get('/api/orders/options');
      } catch (error) {
        console.error(error);
        return [];
      }
    };
    getOptionsList().then(({ data }) => {
      setOptions(data.data.schema.attributes.hear_about_us.enum);
    });
  }, []);

  const tipsEmailOptions = [
    { value: 'true', label: 'Yes,sign me up' },
    { value: 'false', label: 'No, thanks ' },
  ];
  const firstExpOptions = [
    { value: 'true', label: 'Yes' },
    { value: 'false', label: 'No' },
  ];

  return (
    <section className={ s.section }>
      <Title>Get a Quote</Title>
      <Steps />
      <FormWrapper initialValues={ initialValues }>
        <>
          <div className={ s.row }>
            <Input name="first_name" as="input" placeholder="e.g. Anna" label="FIRST NAME" required />
            <Input name="last_name" as="input" placeholder="e.g. Smith" label="LAST NAME" required />
          </div>
          <div className={ s.row }>
            <Input name="phone_number" as="input" placeholder="e.g.(218)111-1111" label="PHONE NUMBER" required />
            <Input name="email" as="input" placeholder="e.g.anna@gmai.com" label="EMAIL" required />
          </div>
          <div className={ s.row }>
            <Input name="city" as="input" placeholder="e.g.Shoreline" label="CITY" required />
            <Input name="zip_code" as="input" placeholder="98155" label="ZIP CODE" required />
          </div>
          <SelectField name="hear_about_us" as="select" placeholder="Select from the list..." label="How did you hear about us?" required options={ options } />
          <RadioGroup label="Would you like to receive occasional tips and offers via email?" name="tips_via_email" options={ tipsEmailOptions } />
          <RadioGroup label="Is this your first experience with Acumen Handyman?" name="first_exp" options={ firstExpOptions } />
          <Input
            name="description"
            placeholder={ 'e.g.  I would like to...\nI will upload images to make it more clear.Thanks!' }
            label="Please provide a description of your project and upload the image(s)"
            as="textarea"
            style={ { padding: '29px 30px' } }
            rows="7"
            className={ s.description }
          />
          <InputFile name="upload_image" as="file" label="Upload image" />
        </>
      </FormWrapper>
    </section>
  );
};

export default CallbackForm;
