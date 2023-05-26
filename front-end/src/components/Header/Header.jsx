import Logo from '~/components/Logo';
import Navigation from '~/components/Navigation';
import s from './Header.module.scss';

const Header = () => (
  <header className={ s.container }>
    <Logo />
    <Navigation />
  </header>
);

export default Header;
