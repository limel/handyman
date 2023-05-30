/* eslint-disable import/no-extraneous-dependencies */
import { useState, useRef, useEffect } from 'react';
import Steps from '~/components/Steps/';
import FormWrapper from '~/components/UI/FormWrapper';
import Input from '~/components/UI/Input';
import SelectField from '~/components/UI/SelectField';
import RadioGroup from '~/components/UI/RadioGroupe';
import InputFile from '~/components/UI/InputFile';
import cn from 'classnames';
import createOrderApi from '~/pages/api/createOrederApi';
import * as schema from '~/../../cms/src/api/order/content-types/order/schema.json';
import Success from '~/components/Success';
import Error from '~/components/Error';
import Title from '~/components/UI/Title';
import Loading from '~/components/Loading';
import s from './CallbackForm.module.scss';

const CallbackForm = () => {
  const [ status, setStatus ] = useState(null);
  const messagesRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (messagesRef.current && !messagesRef.current.contains(event.target)) {
        setStatus(null); // Reset the status to null when clicking outside the form
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    upload_file: null,
  };

  const handleSubmit = async (values, actions) => {
    setStatus('pending');

    console.log(actions);

    setTimeout(() => {
      createOrderApi(values).then(() => {
        actions.setErrors({});
        actions.resetForm();
        setStatus('success');
      }).catch((error) => {
        setStatus('error');
        actions.setErrors({ submit: error.message });
      });
    }, 5000);

    setTimeout(() => {
      setStatus(null);
    }, 10000);
  };

  const { attributes } = schema;
  const { hear_about_us: hearAboutUsEnum } = attributes;

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
      <FormWrapper initialValues={ initialValues } handleSubmit={ handleSubmit } ref={ formRef }>
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
          <SelectField name="hear_about_us" as="select" placeholder="Select from the list..." label="How did you hear about us?*" required options={ hearAboutUsEnum.enum } />
          <RadioGroup label="Would you like to receive occasional tips and offers via email?" name="tips_via_email" options={ tipsEmailOptions } />
          <RadioGroup label="Is this your first experience with Acumen Handyman?" name="first_exp" options={ firstExpOptions } />
          <Input
            name="description"
            placeholder="e.g.  I would like to...
                  I will upload images to make it more clear.Thanks!"
            label="Please provide a description of your project and upload the image(s)"
            as="textarea"
            style={ { padding: '29px 30px' } }
            rows="7"
          />
          <InputFile name="file" as="file" label="Upload file" />
        </>
        <div ref={ messagesRef }>
          <Success className={ cn({
            [s.success]: status === 'success',
          }) }
          />
          <Error className={ cn({
            [s.error]: status === 'error',
          }) }
          />
          <Loading className={ cn({
            [s.loading]: status === 'pending',
          }) }
          />
        </div>
      </FormWrapper>
    </section>
  );
};

export default CallbackForm;
