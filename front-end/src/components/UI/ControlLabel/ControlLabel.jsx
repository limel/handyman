import cn from 'classnames';
import s from './ControlLabel.module.scss';

export default function ControlLabel({
  label, required, id, children, className, ...props
}) {
  return label ? (
    <label htmlFor={ id } className={ cn(s.label, className) } { ...props }>
      { label }
      {children && children}
      { required && ' *' }
    </label>
  ) : null;
}
