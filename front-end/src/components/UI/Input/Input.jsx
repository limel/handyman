import { Field, useFormikContext } from 'formik';
import cn from 'classnames';
import ControlLabel from '~/components/UI/ControlLabel';
import s from './Input.module.scss';

export default function Input({
  placeholder = '', name, label, required, type = 'text', ...props
})
{
  const { errors } = useFormikContext();

  const classNames = cn(s.input__field, {
    [s.error]: errors[name],
  });

  return (
    <div className={ s.input }>
      <ControlLabel id={ name } label={ label } required={ required } />
      <Field
        type={ type }
        id={ name }
        name={ name }
        placeholder={ placeholder }
        className={ classNames }
        required={ required }
        as={ type === 'textarea' ? 'textarea' : 'input' }
        { ...props }
      />
    </div>
  );
}
