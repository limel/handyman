import Link from 'next/link';
import s from './ContactUs.module.scss';
import Button from '../UI/Button/Button';
import Title from '../UI/Title/Title';

const ContactUs = () => (
  <section className={ s.section }>
    <Title>contact us</Title>
    <div className={ s['contact-block'] }>
      <div className={ s['contact-block__info'] }>
        <p className={ s['work-days'] }>Monday-Friday</p>
        <p className={ s['work-time'] }>8am-8pm</p>
        <div className={ s.contacts }>
          <p>Phone number:</p>
          <p><Link href="tel:2182554388">218-255-4388</Link></p>
        </div>
        <div className={ s.contacts }>
          <p>Email:&nbsp;</p>
          <p><Link href="mailto:acumenhandyman@gmail.com">acumenhandyman@gmail.com</Link></p>
        </div>
        <p className={ s.discription }>Let us help you with your project!</p>
      </div>
    </div>
    <Button href="/callback-form">GET A QUOTE</Button>
  </section>
);

export default ContactUs;
