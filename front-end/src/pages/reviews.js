import Head from 'next/head';
import axios from 'axios';
import Reviews from '~/components/Reviews/Reviews';

export async function getStaticProps() {
  // const googleReviews = await axios(`${ process.env.FRONT_URL }/api/reviews/google`, {
  //   headers: {
  //     Authorization: `Beraer ${ process.env.GOOGLE_API_KEY }`,
  //   },
  // });
  // const googleReviewsArray = googleReviews.data;
  const yelpReviews = await axios(`${ process.env.FRONT_URL }/api/reviews/yelp`, {
    headers: {
      Authorization: `Beraer ${ process.env.YELP_API_KEY }`,
    },
  });
  const yelpReviewsArray = yelpReviews.data;
  return {
    props: {
      // googleReviews: googleReviewsArray,
      yelpReviews: yelpReviewsArray,
    },
  };
}

export default function ReviewsPage({ googleReviews, yelpReviews }) {
  console.log(yelpReviews);
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src='https://widgets.sociablekit.com/google-reviews/widget.js' async defer></script> */}
        {/* <script src="https://widgets.sociablekit.com/thumbtack-reviews/widget.js" async defer /> */}
        {/* <script src="https://widgets.sociablekit.com/yelp-reviews/widget.js" async defer /> */}
      </Head>
      <main>
        <Reviews googleReviews={ googleReviews } yelpReviews={ yelpReviews } />
      </main>
    </>
  );
}
