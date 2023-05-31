import cn from 'classnames';
import s from './ControlLabel.module.scss';

export default function ControlLabel({
  label, required, id, children, className,
}) {
  return label ? (
    <label htmlFor={ id } className={ cn(s.label, className) }>
      { label }
      {children && children}
      { required && ' *' }
    </label>
  ) : null;
}
