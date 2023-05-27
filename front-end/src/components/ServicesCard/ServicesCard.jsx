import Image from 'next/image';
import cn from 'classnames';
import Button from '~/components/UI/Button';
import s from './ServicesCard.module.scss';

const ServicesCard = ({ title, description }) => (
  <li className={ cn(s.card, s.active) }>
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
          } }
        />
      </div>
    </figure>
    <div className="text" dangerouslySetInnerHTML={ { __html: description } } />
    <Button href="/services">
      GET A QUOTE
    </Button>
  </li>
);

export default ServicesCard;
