import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import s from './Navigation.module.scss';

const navigationPlaceholder = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Services',
    url: '/services',
  },
  {
    id: 3,
    title: 'Get a quote',
    url: '/callback-form',
  },
  {
    id: 4,
    title: 'Reviews',
    url: '/reviews',
  },
  {
    id: 5,
    title: 'Contact us',
    url: '/contact-us',
  },
];

const Navigation = () =>
{
  const activeRoute = useRouter().asPath;
  const [ active, setActive ] = useState(false);
  const navigationMenuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() =>
  {
    const handleClickOutside = (event) =>
    {
      if (navigationMenuRef.current && !navigationMenuRef.current.contains(event.target)
        && !buttonRef.current.contains(event.target))
      {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () =>
    {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className={ cn(s['toggle-button'], {
          [s.active]: active,
        }) }
        type="button"
        aria-label="toggle menu"
        onClick={ () => setActive(!active) }
        ref={ buttonRef }
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={ cn(s.navigation, {
          [s.active]: active,
        }) }
      >
        <ul
          className={ s['navigation-list'] }
          ref={ navigationMenuRef }
        >
          { navigationPlaceholder.map(({ id, title, url }) => (
            <li
              key={ id }
              className={ cn(s['navigation-list__item'], {
                [s.active]: activeRoute === url,
              }) }
            >
              <Link href={ url } className={ s['navigation-list__link'] }>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
