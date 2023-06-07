/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import {
  useState, forwardRef, useRef, useEffect,
} from 'react';
import ServicesCard from '~/components/ServicesCard';
import cn from 'classnames';
import useWindowWidth from '~/hooks/useWindowWidth';
import Title from '../UI/Title/Title';
import s from './ServicesList.module.scss';
import Button from '../UI/Button';

// eslint-disable-next-line no-unused-vars
const ServicesList = forwardRef((props, ref) => {
  const { data } = props.services;
  const windowWidth = useWindowWidth();
  const [ activeItem, setActiveItem ] = useState(null);
  const cardCountInRow = windowWidth >= 768 ? 3 : 2;
  const targetRef = useRef(null);
  const overlayRef = useRef(null);
  const commonListRef = useRef(null);

  const rowList = Array
    .from(
      { length: Math.ceil(data.length / cardCountInRow) },
      (_, index) => data.slice(index * cardCountInRow, (index + 1) * cardCountInRow),
    );

  const handleOverlayClick = () => {
    // Set the active item to null when the overlay is clicked
    setActiveItem(null);
  };

  const handlerClick = (id) => {
    if (activeItem === id) setActiveItem(null);
    else setActiveItem(id);
  };

  return (
    <section className={ s.container }>
      <Title>
        Services
      </Title>
      <div className={ s.wrapper }>
        <div className={ s.target } ref={ targetRef } />
        <div
          className={ cn(s.lists, {
            [s.active]: activeItem !== null,
          }) }
          ref={ commonListRef }
        >
          {rowList.map((chunk, index) => (
            <ul
              className={ cn(s.list) }
              key={ index }
            >
              {chunk.map((item) => (
                <ServicesCard
                  key={ item.id }
                  { ...item.attributes }
                  isActive={ activeItem === item.id }
                  onClick={ () => handlerClick(item.id) }
                  targetRef={ targetRef }
                  commonListRef={ commonListRef }
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
      {activeItem && windowWidth <= 1024 && (
      <div
        className={ s.overlay }
        aria-label="overlay"
        ref={ overlayRef }
        onClick={ handleOverlayClick }
      />
      )}
      {!activeItem ? <Button href="/callback-form" className={ s.button }>GET A QUOTE</Button> : null}
    </section>
  );
});
export default ServicesList;
