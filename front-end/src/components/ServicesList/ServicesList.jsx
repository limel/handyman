/* eslint-disable react/no-array-index-key */
import ServicesCard from '~/components/ServicesCard';
import Title from '../UI/Title/Title';
import s from './ServicesList.module.scss';

const listPlaceholder = [
  {
    id: 1,
    title: 'In the Bathroom',
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
    id: 1,
    title: 'In the Bathroom',
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
    id: 1,
    title: 'In the Bathroom',
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
    id: 1,
    title: 'In the Bathroom',
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
    id: 1,
    title: 'In the Bathroom',
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
    id: 1,
    title: 'In the Bathroom',
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
  const rowList = [];

  for (let i = 0; i < listPlaceholder.length; i += 3)
  {
    const row = listPlaceholder.slice(i, i + 3);
    rowList.push(row);
  }

  console.log(rowList);

  return (
    <section className={ s.container }>
      <Title>
        Services
      </Title>
      <ul className={ s.list }>
        {rowList.map((chunk, index) => (
          <ul key={ `wrapper-${ index }` } className={ s.row }>
            {chunk.map((item) => (
              <ServicesCard
                key={ item.id }
                title={ item.title }
                description={ item.description }
              />
            ))}
          </ul>
        ))}
      </ul>
    </section>
  );
};

export default ServicesList;
