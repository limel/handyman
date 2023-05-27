import ServicesCard from '~/components/ServicesCard';
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
];

const ServicesList = () => (
  <section className={ s.container }>
    <ul className={ s.list }>
      {listPlaceholder.map((item) => (
        <ServicesCard
          key={ item.id }
          title={ item.title }
          description={ item.description }
        />
      ))}
    </ul>
  </section>
);

export default ServicesList;
