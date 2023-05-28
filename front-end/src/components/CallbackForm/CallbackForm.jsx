import Steps from '~/components/Steps/';
import FormWrapper from '~/components/UI/FormWrapper';
import Input from '~/components/UI/Input';
import s from './CallbackForm.module.scss';
import Title from '../UI/Title/Title';

const CallbackForm = () =>
{
  const initialValues = {
    name: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    zipCode: '',
    hearFrom: '',
    newsletter: false,
    firstExp: false,
    description: '',
    file: null,
  };
  const handleSubmit = (values) =>
  {
    console.log(values);
  };

  return (
    <section className={ s.section }>
      <Title>Get a Quote</Title>
      <Steps />
      <FormWrapper initialValues={ initialValues } handleSubmit={ handleSubmit }>
        <div className={ s.row }>
          <Input name="name" placeholder="e.g. Anna" label="FIRST NAME" required />
          <Input name="lastName" placeholder="e.g. Smith" label="LAST NAME" required />
        </div>
        <div className={ s.row }>
          <Input name="phone" placeholder="e.g. Anna" label="PHONE NUMBER" required />
          <Input name="email" placeholder="e.g. Smith" label="EMAIL" required />
        </div>
        <div className={ s.row }>
          <Input name="city" placeholder="e.g. Anna" label="CITY" required />
          <Input name="zipCode" placeholder="e.g. Smith" label="ZIP CODE" required />
        </div>
        <Input name="hearFrom" placeholder="Select from the list..." label="How did you hear about us?*" required />
        <Input
          name="description"
          placeholder="e.g.  I would like to...
          I will upload images to make it more clear.Thanks!"
          label="Please provide a description of your project and upload the image(s)"
          type="textarea"
          rows="7"
        />
      </FormWrapper>
    </section>
  );
};

export default CallbackForm;
