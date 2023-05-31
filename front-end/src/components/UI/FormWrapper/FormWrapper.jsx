/* eslint-disable no-param-reassign */
import { useState, useRef, useEffect } from 'react';
import { Formik, Form } from 'formik';
import Button from '~/components/UI/Button';
import Loading from '~/components/Loading';
import Success from '~/components/Success';
import cn from 'classnames';
import Error from '~/components/Error';
import createEntity from '~/lib/createEntity';
import s from './FormWrapper.module.scss';
import ValidataionSchema from './validationSchema';

const FormWrapper = ({ children, initialValues }) => {
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

  const handleSubmit = async (values, actions) => {
    setStatus('pending');
    if (values.upload_file !== null) {
      const formData = new FormData();
      values.upload_file.forEach((file) => {
        formData.append('files', file);
      });
      const response = await fetch('http://localhost:1337/api/upload/', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      values.upload_image = data.map((file) => file.id);
    }

    createEntity(values)
      .then(() => {
        actions.setErrors({});
        actions.resetForm();
        setStatus('success');
        actions.setSubmitting(false);
      })
      .catch((error) => {
        setStatus('error');
        actions.setErrors({ submit: error.message });
        actions.setSubmitting(false);
      });
    setTimeout(() => {
      setStatus(null);
      actions.setSubmitting(false);
    }, 5000);
  };

  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ handleSubmit }
      validationSchema={ ValidataionSchema }
    >
      { (props) => {
        useEffect(() => {
          if (!props.isValid && props.isSubmitting) {
            return formRef.current.scrollIntoView({ behavior: 'smooth' });
          }
          return props.setSubmitting(false);
        }, [ props.isValid, props.isSubmitting ]);

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
