/* eslint-disable no-nested-ternary */
import { useEffect, useState, useId } from 'react';
import s from './Reviews.module.scss';
import ReviewItem from '../UI/ReviewItem/ReviewItem';
import ReviewsHead from './ReviewsHead';

const Reviews = ({ googleReviews, yelpReviews, thumbtackReviews }) => {
  const [ reviews, setReviews ] = useState([]);
  const [ visibleReviews, setVisibleReviews ] = useState(10);

  useEffect(() => {
    if (!googleReviews || !yelpReviews || !thumbtackReviews) return;
    setReviews([
      ...googleReviews.map((review) => ({ ...review, source: 'google' })),
      ...yelpReviews.map((review) => ({ ...review, source: 'yelp' })),
      ...thumbtackReviews.map((review) => ({ ...review, source: 'thumbtack' })),
    ]);
  }, [ googleReviews, yelpReviews, thumbtackReviews ]);

  const handleLoadMoreReviews = () => {
    setVisibleReviews((prevCount) => prevCount + 10);
  };

  return (
    <section className={ s.section }>
      <ReviewsHead />
      <div className={ s.reviews }>
        {reviews.length !== 0 ? (reviews.slice(0, visibleReviews).map((review, index) => (
          <ReviewItem { ...review } key={ index } />
        ))) : (
          <p className={ s.fallback }>
            Sorry, services is not aviable now, please try again later
          </p>
        )}
      </div>
      {visibleReviews < reviews.length && (
      <button type="button" className={ s['load-more'] } onClick={ handleLoadMoreReviews }>
        Load More Reviews
      </button>
      )}
    </section>
  );
};

export default Reviews;
