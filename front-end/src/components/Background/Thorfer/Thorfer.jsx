import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import s from './Thorfer.module.scss';

export default function Thorfer({
  top, left, delay = 1, width = 130, height = 289, bottom,
}) {
  const lightRef = useRef(null);

  useEffect(() => {
    gsap.to(
      lightRef.current,
      {
        color: '#FBE64D',
        duration: 2,
        delay,
        ease: 'bounce.in',
      },
    );
  }, []);
  return (
    <svg
      width="130"
      height="289"
      viewBox="0 0 130 289"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ s.thorfer }
      style={ {
        top, left, width, height, bottom,
      } }
    >
      <path d="M53.6294 19.4309L67.6544 6.43693C70.0137 4.25156 73.8398 4.25083 76.2001 6.4353L76.2019 6.43693L113.54 41.0253C115.806 43.1236 117.078 45.9691 117.078 48.936V278.028" stroke="#CBCBCB" strokeOpacity="0.05" strokeWidth="8" />
      <path fillRule="evenodd" clipRule="evenodd" d="M53.1325 18.6039C62.8669 27.6167 62.8669 42.2294 53.1325 51.2422L38.1774 65.0888L2.92611 32.4505L17.8812 18.6039C27.6156 9.59112 43.3981 9.59112 53.1325 18.6039Z" fill="#CBCBCB" fillOpacity="0.26" />
      <path d="M17.6256 50.909C27.3599 59.9219 36.8056 65.7891 38.7229 64.0138C40.6403 62.2386 34.3034 53.4931 24.569 44.4803C14.8346 35.4675 5.38902 29.6003 3.47164 31.3755C1.55427 33.1508 7.8912 41.8962 17.6256 50.909Z" fill="currentColor" ref={ lightRef } className={ s.light } />
      <path d="M104 275.747H130" stroke="#383838" strokeWidth="6" />
    </svg>

  );
}
