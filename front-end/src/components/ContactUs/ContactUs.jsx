/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import s from './ContactUs.module.scss';
import Button from '../UI/Button/Button';
import Title from '../UI/Title/Title';

const ContactUs = ({ ...props }) => {
  const { schedule_days: days } = props;
  const { schedule_time: time } = props;
  const { notice } = props;
  const { contacts_info: contacts } = props;

  return (
    <section className={ s.section }>
      <Title>contact us</Title>
      <div className={ s['contact-block'] }>
        <div className={ s['contact-block__info'] }>
          <p className={ s['work-days'] }>{days}</p>
          <p className={ s['work-time'] }>{time}</p>
          {contacts.map((contact) => (
            <div className={ s.contacts } key={ contact.id }>
              <p>
                {contact.label}
                :
              </p>
              <p>
                {contact.url
                  ? <Link href={ contact.url }>{contact.value}</Link>
                  : contact.value}
              </p>
            </div>
          ))}
          <p className={ s.discription }>{notice}</p>
        </div>
      </div>
      <Button href="/callback-form">GET A QUOTE</Button>
    </section>
  );
};

export default ContactUs;
