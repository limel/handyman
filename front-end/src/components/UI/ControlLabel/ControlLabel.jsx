import s from './ControlLabel.module.scss';

export default function ControlLabel({ label, required, id })
{
  return label ? (
    <label htmlFor={ id } className={ s.label }>
      { label }
      { required && ' *' }
    </label>
  ) : null;
}
