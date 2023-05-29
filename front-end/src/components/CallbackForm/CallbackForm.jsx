import Steps from '~/components/Steps/';
import FormWrapper from '~/components/UI/FormWrapper';
import Input from '~/components/UI/Input';
import SelectField from '~/components/UI/SelectField';
import RadioGroup from '~/components/UI/RadioGroupe';
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

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <section className={ s.section }>
      <Title>Get a Quote</Title>
      <Steps />
      <FormWrapper initialValues={ initialValues } handleSubmit={ handleSubmit }>
        <div className={ s.row }>
          <Input name="name" as="input" placeholder="e.g. Anna" label="FIRST NAME" required />
          <Input name="lastName" as="input" placeholder="e.g. Smith" label="LAST NAME" required />
        </div>
        <div className={ s.row }>
          <Input name="phone" as="input" placeholder="e.g. Anna" label="PHONE NUMBER" required />
          <Input name="email" as="input" placeholder="e.g. Smith" label="EMAIL" required />
        </div>
        <div className={ s.row }>
          <Input name="city" as="input" placeholder="e.g. Anna" label="CITY" required />
          <Input name="zipCode" as="input" placeholder="e.g. Smith" label="ZIP CODE" required />
        </div>
        <SelectField name="hearFrom" as="select" placeholder="Select from the list..." label="How did you hear about us?*" required options={ options } />
        <Input
          name="description"
          placeholder="e.g.  I would like to...
          I will upload images to make it more clear.Thanks!"
          label="Please provide a description of your project and upload the image(s)"
          as="textarea"
          style={ { padding: '29px 30px' } }
          rows="7"
        />
        <RadioGroup label="Gender" name="gender" options={ options } />
      </FormWrapper>
    </section>
  );
};

export default CallbackForm;
