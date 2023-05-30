import Button from '../UI/Button/Button';
import s from './HomePage.module.scss';

const HomePage = () => (
  <section className={ s.section }>
    <div className={ s['main-block'] }>
      <div className={ s['main-block__text'] }>
        <p className={ s.text }>Seattle</p>
        <h1 className={ s.handyman }>Handyman</h1>
        <p className={ s.text } style={ { textAlign: 'right' } }>Services</p>
      </div>
    </div>
    <p className={ s.description }>Serving Customers in the Greater Seattle Area</p>
    <Button href="/callback-form" className={ s.button }>GET A QUOTE</Button>
  </section>
);

export default HomePage;
