import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({
  children, className, type
}) =>
{
  return (
    <button
      className={ cn(s.button, className) }
      type={ type }
    >
      {children}
    </button>
  );
};

export default Button;
