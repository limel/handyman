/* eslint-disable react/no-array-index-key */
import { useState, forwardRef, useRef } from 'react';
import ServicesCard from '~/components/ServicesCard';
import cn from 'classnames';
import useWindowWidth from '~/hooks/useWindowWidth';
import Title from '../UI/Title/Title';
import s from './ServicesList.module.scss';
import Button from '../UI/Button';

const listPlaceholder = [
  {
    id: 1,
    title: 'In the Bathroom1',
    description: `<ul>
      <li>Vanity installation</li>
      <li>Toilet seals and total replacements</li>
      <li>Updating wall fixtures</li>
      <li>Grout</li>
      <li>Shower door installation</li>
      <li>Replacing bathroom fans</li>
      <li>Undersink plumbing and p-traps</li>
    </ul>`,
  },
  {
    id: 2,
    title: 'In the Bathroom2',
    description: `<ul>
      <li>Vanity installation</li>
      <li>Toilet seals and total replacements</li>
      <li>Updating wall fixtures</li>
      <li>Grout</li>
      <li>Shower door installation</li>
      <li>Replacing bathroom fans</li>
      <li>Undersink plumbing and p-traps</li>
      <li>Updating wall fixtures</li>
      <li>Grout</li>
      <li>Shower door installation</li>
      <li>Replacing bathroom fans</li>
      <li>Undersink plumbing and p-traps</li>
    </ul>`,
  },
  {
    id: 3,
    title: 'In the Bathroom3',
    description: `<ul>
      <li>Vanity installation</li>
      <li>Toilet seals and total replacements</li>
      <li>Updating wall fixtures</li>
      <li>Grout</li>
      <li>Shower door installation</li>
      <li>Replacing bathroom fans</li>
      <li>Undersink plumbing and p-traps</li>
    </ul>`,
  },
  {
    id: 4,
    title: 'In the Bathroom4',
    description: `<ul>
      <li>Vanity installation</li>
      <li>Toilet seals and total replacements</li>
      <li>Updating wall fixtures</li>
      <li>Grout</li>
      <li>Shower door installation</li>
      <li>Replacing bathroom fans</li>
      <li>Undersink plumbing and p-traps</li>
    </ul>`,
  },
  {
    id: 5,
    title: 'In the Bathroom5',
    description: `<ul>
      <li>Vanity installation</li>
      <li>Toilet seals and total replacements</li>
      <li>Updating wall fixtures</li>
      <li>Grout</li>
      <li>Shower door installation</li>
      <li>Replacing bathroom fans</li>
      <li>Undersink plumbing and p-traps</li>
    </ul>`,
  },
  {
    id: 6,
    title: 'In the Bathroom6',
    description: `<ul>
      <li>Vanity installation</li>
      <li>Toilet seals and total replacements</li>
      <li>Updating wall fixtures</li>
      <li>Grout</li>
      <li>Shower door installation</li>
      <li>Replacing bathroom fans</li>
      <li>Undersink plumbing and p-traps</li>
    </ul>`,
  },
];

const ServicesList = forwardRef((props, ref) => {
  const windowWidth = useWindowWidth();
  const cardCountInRow = windowWidth >= 768 ? 3 : 2;
  const [ activeItem, setActiveItem ] = useState(null);
  const targetRef = useRef(null);
  const commonListRef = useRef(null);
  const handlerClick = (id) => {
    if (activeItem === id) setActiveItem(null);
    else setActiveItem(id);
  };
  const { data } = props.services;
  const rowList = [];
  for (let i = 0; i < data.length; i += cardCountInRow) {
    const row = data.slice(i, i + cardCountInRow);
    rowList.push(row);
  }
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
              className={ cn(s.list, {
                [s.active]: activeItem !== null,
              }) }
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
      {!activeItem ? <Button href="/callback-form" className={ s.button }>GET A QUOTE</Button> : null}
    </section>
  );
});
export default ServicesList;
