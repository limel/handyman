import { Formik, Form } from 'formik';
import Button from '~/components/UI/Button';
import s from './FormWrapper.module.scss';

const FormWrapper = ({ children, initialValues, handleSubmit }) => (
  <Formik
    initialValues={ initialValues }
    onSubmit={ handleSubmit }
  >
    <Form className={ s.form }>
      <div className={ s.form__wrapper }>
        {children}
      </div>
      <Button type="submit">SUBMIT THE FORM</Button>
    </Form>
  </Formik>
);

export default FormWrapper;
