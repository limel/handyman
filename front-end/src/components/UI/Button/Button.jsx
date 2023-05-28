import cn from 'classnames';
import Link from 'next/link';
import s from './Button.module.scss';

const Button = ({
  children, className, type, onClick, tag, href = false,
}) =>
{
  const Tag = href !== false ? tag || Link : tag || 'button';
  const hrefValue = href !== false ? href : undefined;
  return (
    <Tag
      className={ cn(s.button, className) }
      type={ type }
      onClick={ tag !== 'a' || tag !== Link ? onClick : null }
      href={ hrefValue }
    >
      {children}
    </Tag>
  );
};

export default Button;
