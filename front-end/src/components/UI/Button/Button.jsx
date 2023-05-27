import cn from 'classnames';
import Link from 'next/link';
import s from './Button.module.scss';

const Button = ({
  children, className, type, onClick, tag, href,
}) =>
{
  const Tag = tag || Link;
  return (
    <Tag
      className={ cn(s.button, className) }
      type={ type }
      onClick={ tag !== 'a' || tag !== Link ? onClick : null }
      href={ href ?? null }
    >
      {children}
    </Tag>
  );
};

export default Button;
