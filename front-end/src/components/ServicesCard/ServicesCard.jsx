import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import useWindowWidth from '~/hooks/useWindowWidth';
import Image from 'next/image';
import cn from 'classnames';
import Button from '~/components/UI/Button';
import s from './ServicesCard.module.scss';

const ServicesCard = ({
  title, description, isActive, onClick, targetRef, commonListRef, image,
}) => {
  const { url } = image.data.attributes;
  const [ cardActiveHeight, setCardActiveHeight ] = useState(0);
  const cardClassName = cn(s.card, { [s.active]: isActive });
  const windowWidth = useWindowWidth();
  const textRef = useRef(null);
  const cardRef = useRef(null);

  const handlerClick = (e) => {
    if (e.currentTarget === textRef.current) return;
    onClick();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handlerClick(e);
  };

  useEffect(() => {
    let timeoutId;

    const animateCardToTarget = () => {
      const targetPosition = targetRef.current.getBoundingClientRect();
      const cardPosition = cardRef.current.getBoundingClientRect();
      const cardHeight = cardRef.current.scrollHeight - commonListRef.current.offsetHeight;

      setCardActiveHeight(cardHeight);

      const x = targetPosition.left - cardPosition.left;
      const y = targetPosition.top - cardPosition.top;

      gsap.to(textRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'expo.out',
        // delay: 0.6,
      });

      gsap.to(cardRef.current, {
        x,
        y,
        duration: 0.3,
        // delay: 0.6,
        ease: 'expo.out',
      });
    };

    const resetCardPosition = () => {
      setCardActiveHeight(0);
      gsap.to(cardRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'line.out',
      });

      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'line.out',
        // delay: 0.6,
      });
    };

    if (windowWidth > 1024) {
      if (isActive) {
        // Add a delay of 500 milliseconds before calculating the position
        timeoutId = setTimeout(() => {
          animateCardToTarget();
        }, 200);
      } else {
        resetCardPosition();
      } return () => {
        // it's important!
        clearTimeout(timeoutId);
      };
    }
    return () => {};
  }, [ isActive, windowWidth ]);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    const mainHeight = mainElement.offsetHeight;

    if (isActive && cardActiveHeight > 0) {
      mainElement.style.minHeight = `${ mainHeight + cardActiveHeight }px`;
    } else {
      mainElement.style.minHeight = 0;
    }
  }, [ cardActiveHeight ]);

  return (
    <li
      className={ cardClassName }
      ref={ cardRef }
    >
      <figure
        className={ s.main }
        onClick={ handlerClick }
        tabIndex={ 0 }
        aria-label="services-card"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        onKeyDown={ handleKeyPress }
      >
        <figcaption>
          <h2 className={ s.title }>{title}</h2>
        </figcaption>
        <div className={ s.image }>
          <Image
            // TODO hide back url
            src={ `${ process.env.BACK_URL }${ url }` }
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
      <div className={ s.description } ref={ textRef }>
        <button className={ s.close } type="button" onClick={ onClick }>
        </button>
        <h2 className={ s.description__title }>{title}</h2>
        <div className="text" dangerouslySetInnerHTML={ { __html: description } } />
        <Button href="/callback-form" className={ s.button }>
          GET A QUOTE
        </Button>
      </div>
    </li>
  );
};

export default ServicesCard;
