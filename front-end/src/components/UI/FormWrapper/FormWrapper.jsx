/* eslint-disable no-param-reassign */
import { useState, useRef, useEffect } from 'react';
import { Formik, Form } from 'formik';
import cn from 'classnames';
import axios from 'axios';
import Button from '~/components/UI/Button';
import Loading from '~/components/Loading';
import Success from '~/components/Success';
import Error from '~/components/Error';
// import createEntity from '~/api/createEntity';
// import uploadFile from '~/api/uploadFile';
import s from './FormWrapper.module.scss';
import ValidataionSchema from './validationSchema';

const FormWrapper = ({ children, initialValues }) => {
  const [ status, setStatus ] = useState(null);

  const messagesRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = async (values, actions) => {
    setStatus('pending');

    // if (values.upload_image.length > 0) {
    //   const formData = new FormData();
    //   values.upload_image.forEach((file) => {
    //     formData.append('file', file);
    //   });

    //   const responose = await axios.post('/api/upload', formData);
    //   values.upload_image = responose.data.map((file) => file.id);
    // }

    await axios.post('/api/orders', {
      data: values,
    }).then(() => {
      actions.setErrors({});
      actions.resetForm();
      setStatus('success');
      actions.setSubmitting(false);
    })
      .catch((error) => {
        setStatus('error');
        actions.setErrors({ submit: error.message });
        actions.setSubmitting(false);
      }).finally(() => {
        setTimeout(() => {
          setStatus(null);
          actions.setSubmitting(false);
        }, 5000);
      });
  };

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

  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ handleSubmit }
      validationSchema={ ValidataionSchema }
    >
      { ({ isValid, isSubmitting, setSubmitting }) => {
        useEffect(() => {
          if (!isValid && isSubmitting) {
            return formRef.current.scrollIntoView({ behavior: 'smooth' });
          }
          return setSubmitting(false);
        }, [ isValid, isSubmitting ]);

        return (
          <Form className={ s.form } ref={ formRef }>
            <div className={ s.form__wrapper }>
              {children}
            </div>
            <Button type="submit">SUBMIT THE FORM</Button>
            <div
              ref={ messagesRef }
            >
              <Success className={ cn({
                [s.active]: status === 'success',
              }) }
              />
              <Error className={ cn({
                [s.active]: status === 'error',
              }) }
              />
              <Loading className={ cn({
                [s.active]: status === 'pending',
              }) }
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormWrapper;
