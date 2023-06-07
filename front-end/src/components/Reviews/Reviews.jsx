/* eslint-disable no-nested-ternary */
import { useEffect, useState, useId } from 'react';
import useWindowWidth from '~/hooks/useWindowWidth';
import s from './Reviews.module.scss';
import ReviewItem from '../UI/ReviewItem/ReviewItem';
import ReviewsHead from './ReviewsHead';
import Button from '../UI/Button/Button';
import Title from '../UI/Title/Title';

const Reviews = ({ googleReviews, yelpReviews, thumbtackReviews }) => {
  const windowWidth = useWindowWidth();
  const reviewsCount = windowWidth >= 992 ? 10 : 2;
  const [ reviews, setReviews ] = useState([]);
  const [ visibleReviews, setVisibleReviews ] = useState(reviewsCount);

  useEffect(() => {
    setVisibleReviews(reviewsCount);
  }, [ reviewsCount ]);

  useEffect(() => {
    if (!googleReviews || !yelpReviews || !thumbtackReviews) return;
    setReviews([
      ...googleReviews.map((review) => ({ ...review, source: 'google' })),
      ...yelpReviews.map((review) => ({ ...review, source: 'yelp' })),
      ...thumbtackReviews.map((review) => ({ ...review, source: 'thumbtack' })),
    ]);
  }, [ googleReviews, yelpReviews, thumbtackReviews ]);

  const handleLoadMoreReviews = () => {
    setVisibleReviews((prevCount) => prevCount + reviewsCount);
  };

  return (
    <section className={ s.section }>
      <Title>Reviews</Title>
      {windowWidth >= 992 ? <ReviewsHead /> : null}
      <div className={ s.reviews }>
        {reviews.length !== 0 ? (reviews.slice(0, visibleReviews).map((review, index) => (
          <ReviewItem { ...review } key={ index } />
        ))) : (
          <p className={ s.fallback }>
            Sorry, services is not aviable now, please try again later
          </p>
        )}
      </div>
      <div className={ s.buttons }>
        {windowWidth > 992
          ? visibleReviews < reviews.length && (
          <Button className={ s['load-more'] } onClick={ handleLoadMoreReviews }>
            Load More Reviews
          </Button>
          )
          : (
            <div className={ s['load-more'] } onClick={ handleLoadMoreReviews }>
              <div>
                <svg><use href="/sprite.svg#arrow" /></svg>
                <svg><use href="/sprite.svg#arrow" /></svg>
              </div>
              <div>
                <svg><use href="/sprite.svg#arrow" /></svg>
                <svg><use href="/sprite.svg#arrow" /></svg>
              </div>
            </div>
          )}
        <Button className={ s['google-review'] }>
          LEAVE A REVIEW&nbsp;&nbsp;
          <svg className={ s['link-icon'] }><use href="/sprite.svg#google" /></svg>
        </Button>
      </div>
      <p className={ s['button-discription'] }>Google review</p>
    </section>
  );
};

export default Reviews;
