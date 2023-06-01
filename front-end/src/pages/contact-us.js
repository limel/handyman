import Head from 'next/head';
import Background from '~/components/Background';
import LampLightAnimation from '~/components/Background/LampLightAnimation';
import Bath from '~/components/Background/Bath';
import ContactUs from '~/components/ContactUs';
import House from '~/components/Background/House';
import Cookie from '~/components/Background/Cookie';
import useWindowWidth from '~/hooks/useWindowWidth';
import Kitchen from '~/components/Background/Kitchen';

export default function ContuctUs() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <Head>
        <title>Contuct Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactUs />
      </main>
      <Background>
        {windowWidth >= 1440 ? <LampLightAnimation top="-21%" left="33%" /> : null}
        <LampLightAnimation top={ windowWidth >= 1440 ? '-21%' : windowWidth >= 992 ? '-26%' : '-30%' } left="61%" />
        <Bath
          bottom={ windowWidth >= 1440 ? '8%' : windowWidth >= 768 ? '22%' : '6%' }
          left={ windowWidth >= 1440 ? '16%' : windowWidth >= 768 ? '67%' : '16%' }
          width={ windowWidth >= 1440 ? '154' : '102' }
          height={ windowWidth >= 1440 ? '140' : '92' }
          transform={ windowWidth >= 1440 ? 'scaleX(-1)' : 'scaleX(1)' }
        />
        {windowWidth >= 1440 ? <House bottom="5%" left="64%" /> : null}
        {windowWidth <= 992
          ? (
            <Kitchen
              bottom={ windowWidth < 768 ? '13%' : windowWidth <= 992 ? '8%' : null }
              left={ windowWidth < 768 ? '76%' : windowWidth <= 992 ? '37%' : null }
              width={ windowWidth < 768 ? '80' : windowWidth <= 992 ? '103' : null }
              height={ windowWidth < 768 ? '85' : windowWidth <= 992 ? '109' : null }
            />
          )
          : null}
        {windowWidth >= 768 ? (
          <Cookie
            left={ windowWidth >= 1440 ? '-17%' : '-37%' }
            bottom={ windowWidth >= 1440 ? '12%' : '-4%' }
          />
        ) : null}
      </Background>
    </>
  );
}
