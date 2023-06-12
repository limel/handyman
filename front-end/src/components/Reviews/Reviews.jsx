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
        <Button className={ s['google-review'] } target="_blank" href="https://www.google.com/localservices/prolist?g2lbs=ADZRdkthETbQl7o5KnhMv19EihAea9xz139-iPyNEHfaiDaaMVBAx1aZAsFrs0UMWOpTOZ5I9ZZjhV5hCe7JhmjyY8CIZOlJkbikVrwV25aL66zOseZDitzqo7wvNzYW6KaVM-uuAHiL&hl=ru-UA&gl=ua&cs=1&ssta=1&q=acumen%20handyman&oq=acumen%20handyman&slp=MgA6HENoTUloSnpDa01TLV93SVZpZUd5Q2gyRVVRNi1SAggCYAB60AFDZzloWTNWdFpXNGdhR0Z1WkhsdFlXNUlpUFBZeXVhNGdJQUlXaGtRQUJBQkdBQVlBU0lQWVdOMWJXVnVJR2hoYm1SNWJXRnVrZ0VJYUdGdVpIbHRZVzZxQVZnS0NTOXRMekE1TVY4NWVCQUJLaE1pRDJGamRXMWxiaUJvWVc1a2VXMWhiaWdOTWg4UUFTSWJSNUlIdFZrQzBkZFhFY2daeC1pTTZiNEk0R2lDN0w4b200LUZNaE1RQWlJUFlXTjFiV1Z1SUdoaGJtUjViV0Z1kgEqCg0vZy8xMXN0bnBkZ2Q4Cg0vZy8xMXQ2Y2o2cDQ1EgQSAggBEgQKAggB&src=2&spp=Cg0vZy8xMXN0bnBkZ2Q4OrABV2hrUUFCQUJHQUFZQVNJUFlXTjFiV1Z1SUdoaGJtUjViV0Z1a2dFSWFHRnVaSGx0WVc2YUFRQ3FBVmdLQ1M5dEx6QTVNVjg1ZUJBQktoTWlEMkZqZFcxbGJpQm9ZVzVrZVcxaGJpZ05NaDhRQVNJYlI1SUh0VmtDMGRkWEVjZ1p4LWlNNmI0STRHaUM3TDhvbTQtRk1oTVFBaUlQWVdOMWJXVnVJR2hoYm1SNWJXRnU%3D&serdesk=1&lrlstt=1686600408967&ved=2ahUKEwi7xbuQxL7_AhXomIsKHS8OA_MQvS56BAgMEAE&scp=Cg1nY2lkOmhhbmR5bWFuEoYBEhIJhznuocT820ARnsm3O20O048iWNCh0L7QsdC-0YDQvdGL0Lkg0YDQsNC50L7QvSwg0JTQvdC10L_RgCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwqFA30K9ccFcsM4BQdYHDlHCVDh-8UMAEaD2FjdW1lbiBoYW5keW1hbiIPYWN1bWVuIGhhbmR5bWFuKiHQnNCw0YHRgtC10YAg0L3QsCDQstGB0LUg0YDRg9C60Lg%3D#ts=3">
          LEAVE A REVIEW&nbsp;&nbsp;
          <svg className={ s['link-icon'] }><use href="/sprite.svg#google" /></svg>
        </Button>
      </div>
      <p className={ s['button-discription'] }>Google review</p>
    </section>
  );
};

export default Reviews;
