import Head from 'next/head';
import Reviews from '~/components/Reviews/Reviews';

export default function ReviewsPage()
{
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDFWvgz9fkV8wnlzz3nsoBKDb17UjMJsv0" /> */}
        {/* <script src='https://widgets.sociablekit.com/google-reviews/widget.js' async defer></script> */}
        {/* <script src="https://widgets.sociablekit.com/thumbtack-reviews/widget.js" async defer /> */}
        {/* <script src="https://widgets.sociablekit.com/yelp-reviews/widget.js" async defer /> */}
      </Head>
      <main>
        <Reviews />
      </main>
    </>
  );
}
