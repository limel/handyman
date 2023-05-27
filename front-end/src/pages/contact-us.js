import Head from 'next/head';
import ContactUs from '~/components/ContactUs/ContactUs';

export default function ContuctUs()
{
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
    </>
  );
}