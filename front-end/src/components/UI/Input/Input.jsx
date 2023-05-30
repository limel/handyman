import { Field, useFormikContext } from 'formik';
import cn from 'classnames';
import ControlLabel from '~/components/UI/ControlLabel';
import s from './Input.module.scss';

export default function Input({
  placeholder = '', name, label, required, type = 'text', ...props
}) {
  const {
    errors, values, touched, setFieldValue,
  } = useFormikContext();
  const fullfieldCondition = values[name] !== '' && !errors[name] && touched[name] && props.as !== 'textarea';

  const classNames = cn(s.input__field, {
    [s.error]: errors[name] && touched[name],
    [s.fullfield]: fullfieldCondition,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  return (
    <div className={ s.input }>
      <ControlLabel id={ name } label={ label } required={ required } />
      <Field
        type={ type }
        id={ name }
        name={ name }
        value={ values[name] }
        placeholder={ placeholder }
        className={ classNames }
        onChange={ handleChange }
        { ...props }
      />
    </div>
  );
}
