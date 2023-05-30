import Link from 'next/link';
import Chat from '~/components/Chat';
import s from './Footer.module.scss';

const Footer = () => (
  <footer className={ s.container }>
    <div className={ s.phoneBlock }>
      <Link href="/contact-us" className={ s.phoneIconLink }>
        <svg className={ s.phoneIcon }>
          <use href="/sprite.svg#phone" />
        </svg>
      </Link>
      <Link href="tel:2182554388" className={ s.phoneNumber }>(218)255-4388</Link>
    </div>
    <Chat />
  </footer>
);

export default Footer;
