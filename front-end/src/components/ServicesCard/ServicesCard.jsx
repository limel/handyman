import { useRef, useEffect } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import Button from '~/components/UI/Button';
import s from './ServicesCard.module.scss';

const ServicesCard = ({
  title, description, isActive, onClick,
}) =>
{
  const textRef = useRef(null);

  useEffect(() =>
  {
    if (isActive) textRef.current.style.height = `${ textRef.current.scrollHeight }px`;
    else textRef.current.style.height = '0px';
  }, [ isActive ]);

  const handleKeyPress = (e) =>
  {
    if (e.key === 'Enter') onClick();
  };

  const cardClassName = cn(s.card, { [s.active]: isActive });

  return (
    <li
      className={ cardClassName }
      onClick={ onClick }
      tabIndex={ 0 }
      onKeyDown={ handleKeyPress }
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
    >
      <figure className={ s.main }>
        <figcaption>
          <h2 className={ s.title }>{title}</h2>
        </figcaption>
        <div className={ s.image }>
          <Image
            src="/images/services/test.jpg"
            alt="test"
            fill
            style={ {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              inset: ' auto 0 0 auto',
            } }
          />
        </div>
      </figure>
      <div ref={ textRef } className="text" dangerouslySetInnerHTML={ { __html: description } } />
      <Button href="/services" className={ s.button }>
        GET A QUOTE
      </Button>
    </li>
  );
};

export default ServicesCard;
