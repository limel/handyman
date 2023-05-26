/* eslint-disable camelcase */
/* eslint-disable react/no-unknown-property */
import Applayout from '~/layout/Applayout';
import { Roboto, Bebas_Neue } from 'next/font/google';
import '~/styles/globals.scss';

const roboto = Roboto({
  subsets: [ 'latin' ],
  weight: [ '100', '300', '400', '500', '700' ],
  style: [ 'normal', 'italic' ],
});

const bebasNeue = Bebas_Neue({
  subsets: [ 'latin' ],
  weight: '400',
  style: [ 'normal' ],
});

export default function App({ Component, pageProps })
{
  return (
    <>
      <style jsx global>
        {`
        :root {
          --font-text: ${ roboto.style.fontFamily };
          --font-title: ${ bebasNeue.style.fontFamily };
        }
      `}
      </style>
      <Applayout>
        <Component { ...pageProps } />
      </Applayout>
    </>
  );
}
