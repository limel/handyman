import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import cn from 'classnames';
import Button from '~/components/UI/Button';
import s from './ServicesCard.module.scss';

const ServicesCard = ({
  title, description, isActive, onClick, targetRef, commonListRef, image,
}) => {
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const [ cardActiveHeight, setCardActiveHeight ] = useState(0);
  const { url } = image.data.attributes;

  // Assuming the image file is located in '/path/to/images' folder

  // Read the image file

  console.log(url);
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

    if (isActive) {
      // Add a delay of 500 milliseconds before calculating the position
      timeoutId = setTimeout(() => {
        animateCardToTarget();
      }, 200);
    } else {
      resetCardPosition();
    }

    return () => {
      // Clear the timeout when the component unmounts or when isActive changes it's important!
      clearTimeout(timeoutId);
    };
  }, [ isActive ]);

  const handlerClick = (e) => {
    if (e.currentTarget === textRef.current) return;
    onClick();
  };
  useEffect(() => {
    const mainElement = document.querySelector('main');
    const mainHeight = mainElement.offsetHeight;

    if (isActive && cardActiveHeight > 0) {
      mainElement.style.minHeight = `${ mainHeight + cardActiveHeight }px`;
    } else {
      mainElement.style.minHeight = 0;
    }
  }, [ cardActiveHeight ]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handlerClick(e);
  };

  const cardClassName = cn(s.card, { [s.active]: isActive });

  return (
    <li
      className={ cardClassName }
      ref={ cardRef }
    >
      <figure
        className={ s.main }
        onClick={ handlerClick }
        tabIndex={ 0 }
        role="button"
        onKeyDown={ handleKeyPress }
      >
        <figcaption>
          <h2 className={ s.title }>{title}</h2>
        </figcaption>
        <div className={ s.image }>
          <Image
            src={ `http://127.0.0.1:1337${ url }` }
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
        <div className="text" dangerouslySetInnerHTML={ { __html: description } } />
        <Button href="/services" className={ s.button }>
          GET A QUOTE
        </Button>
      </div>
    </li>
  );
};

export default ServicesCard;
