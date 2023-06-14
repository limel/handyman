/* eslint-disable no-nested-ternary */
import Head from 'next/head';
import Background from '~/components/Background';
import LampLightAnimation from '~/components/Background/LampLightAnimation';
import LampLight from '~/components/Background/LampLight';
import Cookie from '~/components/Background/Cookie';
import House from '~/components/Background/House';
import Bath from '~/components/Background/Bath';
import Kitchen from '~/components/Background/Kitchen';
import ServicesList from '~/components/ServicesList';
import useWindowWidth from '~/hooks/useWindowWidth';
// import axios from 'axios';
import getServices from '~/functions/api/getServices';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const data = await getServices();
  return {
    props: {
      services: data,
    },
  };
}

export default function Home({ services }) {
  const windowWidth = useWindowWidth();
  const [ faviconHref, setFaviconHref ] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const setFavicon = (color) => {
        const favicon = document.getElementById('favicon');
        favicon.href = `favicon-${ color }.svg`;
        setFaviconHref(`favicon-${ color }.svg`);
      };

      const handleColorSchemeChange = (e) => {
        const colorScheme = e.matches ? 'light' : 'dark';
        setFavicon(colorScheme);
      };

      const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      colorSchemeQuery.addListener(handleColorSchemeChange);
      handleColorSchemeChange(colorSchemeQuery);

      return () => {
        colorSchemeQuery.removeListener(handleColorSchemeChange);
      };
    }
  }, []);
  return (
    <>
      <Head>
        <title>service</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={ faviconHref } id="favicon" type="image/x-icon" />
      </Head>
      <main>
        <ServicesList services={ services } />
      </main>
      <Background>
        {windowWidth >= 1024 ? <LampLight top="-41%" left="20%" delay="2.5" /> : null}
        {windowWidth >= 1024 ? <LampLightAnimation top="-18%" left="31%" /> : null}
        <LampLightAnimation
          left={ windowWidth >= 1024 ? '62%' : windowWidth >= 768 ? '65%' : '68%' }
          top={ windowWidth >= 1024 ? '-18%' : windowWidth >= 768 ? '-25%' : '-25%' }
        />
        {windowWidth >= 1024
          ? (
            <Cookie
              left={ windowWidth >= 1024 ? '-17%' : '-37%' }
              bottom={ windowWidth >= 1024 ? '12%' : '-4%' }
            />
          )
          : null }
        {windowWidth >= 1024
          ? (
            <House
              width={ windowWidth >= 1024 ? '227' : windowWidth >= 768 ? '275' : '137' }
              height={ windowWidth >= 1024 ? '227' : windowWidth >= 768 ? '275' : '125' }
              bottom={ windowWidth >= 1024 ? '5%' : windowWidth >= 768 ? '38%' : '36%' }
              left={ windowWidth >= 1024 ? '56%' : windowWidth >= 768 ? '14%' : '17%' }
            />
          )
          : null}
        {windowWidth < 1024
          ? (
            <Bath
              bottom={ windowWidth >= 768 ? '8%' : '10%' }
              left={ windowWidth >= 768 ? '28%' : '2%' }
              width="104"
              height="94"
            />
          ) : null}
        {windowWidth < 1024
          ? (
            <Kitchen
              bottom={ windowWidth >= 768 ? '18%' : '10%' }
              left={ windowWidth >= 768 ? '8%' : '77%' }
              width={ windowWidth >= 768 ? '103' : '80' }
              height={ windowWidth >= 768 ? '108' : '85' }
            />
          ) : null}
      </Background>
    </>
  );
}
