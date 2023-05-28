/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import ServicesCard from '~/components/ServicesCard';
import cn from 'classnames';
import Title from '../UI/Title/Title';
import s from './ServicesList.module.scss';

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

const ServicesList = () =>
{
  const [ activeItem, setActiveItem ] = useState(null);

  const handlerClick = (id) =>
  {
    if (activeItem === id) setActiveItem(null);
    else setActiveItem(id);
  };

  // const rowList = [];

  // for (let i = 0; i < listPlaceholder.length; i += 3)
  // {
  //   const row = listPlaceholder.slice(i, i + 3);
  //   rowList.push(row);
  // }

  return (
    <section className={ s.container }>
      <Title>
        Services
      </Title>
      {/* <div className={ s['list-container'] }> */}
      {/* {rowList.map((chunk, index) => ( */}
      <ul className={ cn(s['list-container'], {
        [s.active]: activeItem !== null,
      }) }
      >
        {listPlaceholder.map((item) => (
          <ServicesCard
            key={ item.id }
            title={ item.title }
            description={ item.description }
            isActive={ activeItem === item.id }
            onClick={ () => handlerClick(item.id) }
          />
        ))}
      </ul>
      {/* ))} */}
      {/* </div> */}
    </section>
  );
};

export default ServicesList;
