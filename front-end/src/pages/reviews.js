import Head from 'next/head';
import { getGoogleReviews, getThumbtackReviews, getYelpReviews } from '~/functions/api/getReviews';
import Reviews from '~/components/Reviews/Reviews';
import Background from '~/components/Background';
import LampLight from '~/components/Background/LampLight';
import LampLightAnimation from '~/components/Background/LampLightAnimation';
import Bath from '~/components/Background/Bath';
import House from '~/components/Background/House';
import Kitchen from '~/components/Background/Kitchen';
import useWindowWidth from '~/hooks/useWindowWidth';
import Cookie from '~/components/Background/Cookie';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const googleReviews = await getGoogleReviews();
  const googleReviewsArray = googleReviews;

  const yelpReviews = await getYelpReviews();
  const yelpReviewsArray = yelpReviews;

  const thumbtackReviews = await getThumbtackReviews();
  const thumbtackReviewsArray = thumbtackReviews;

  return {
    props: {
      googleReviews: googleReviewsArray,
      yelpReviews: yelpReviewsArray,
      thumbtackReviews: thumbtackReviewsArray,
    },
  };
}

export default function ReviewsPage({ googleReviews, yelpReviews, thumbtackReviews }) {
  const windowWidth = useWindowWidth();
  const [ faviconHref, setFaviconHref ] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const setFavicon = (color) => {
        const favicon = document.getElementById('favicon');
        favicon.href = `favicon-${ color }.ico`;
        setFaviconHref(`favicon-${ color }.ico`);
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
        <title>Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href={ faviconHref } id="favicon" type="image/x-icon" />
      </Head>
      <main>
        <Reviews
          googleReviews={ googleReviews }
          yelpReviews={ yelpReviews }
          thumbtackReviews={ thumbtackReviews }
        />
        <Background>
          {windowWidth >= 1024 ? (
            <LampLight
              top="-314px"
              left="17%"
              delay="2.5"
            />
          )
            : null}
          {windowWidth >= 1024 ? <LampLightAnimation top="-240px" left="28%" /> : null}
          <LampLightAnimation
            left={ windowWidth >= 768 ? '62%' : '71%' }
            top={ windowWidth >= 1024 ? '-240px' : windowWidth >= 768 ? '-230px' : '-260px' }
          />
          {windowWidth >= 768
            ? (
              <Bath
                bottom={ windowWidth >= 1024 ? '225px' : windowWidth >= 768 ? '16%' : '8%' }
                left={ windowWidth >= 1024 ? '16%' : windowWidth >= 768 ? '82%' : '66%' }
                width={ windowWidth >= 1440 ? '154' : '104' }
                height={ windowWidth >= 1440 ? '140' : '94' }
              />
            ) : null}
          {windowWidth >= 1024 ? (
            <House
              width="275"
              height="234"
              bottom="99px"
              left="56%"
            />
          )
            : null}
          {windowWidth >= 1024
            ? (
              <Cookie
                left="-260px"
                bottom="50%"
              />
            )
            : null }
          {windowWidth < 1024 && windowWidth >= 768
            ? (
              <Kitchen
                bottom={ windowWidth >= 768 ? '15%' : '8%' }
                left={ windowWidth >= 768 ? '10%' : '8%' }
                width={ windowWidth >= 768 ? '127' : '103' }
                height={ windowWidth >= 768 ? '133' : '109' }
              />
            ) : null}
        </Background>
      </main>
    </>
  );
}
