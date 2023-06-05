import { useEffect, useState } from 'react';
import axios from 'axios';
import s from './Reviews.module.scss';
import ReviewItem from '../UI/ReviewItem/ReviewItem';

const Reviews = () => {
  const placeId = 'ChIJKcxaU1Hj20ARUKAZQD-FLZg';
  const apiKey = 'AIzaSyDFWvgz9fkV8wnlzz3nsoBKDb17UjMJsv0';

  // axios.get('https://data.accentapi.com/feed/148829.json')
  //   .then((response) =>
  //   {
  //   // Обработка успешного ответа
  //     console.log('google', response.data.reviews);
  //   })
  //   .catch((error) =>
  //   {
  //   // Обработка ошибки
  //     console.error(error);
  //   });

  // axios.get('https://data.accentapi.com/feed/149025.json')
  //   .then((response) =>
  //   {
  //   // Обработка успешного ответа
  //     console.log('thumbtack', response.data.reviews);
  //   })
  //   .catch((error) =>
  //   {
  //   // Обработка ошибки
  //     console.error(error);
  //   });

  // axios.get('https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=https%3A%2F%2Fwww.yelp.com%2Fbiz%2Fihop-san-francisco&with_text_only=1&min_rating=5&page_length=100&order=date')
  //   .then((response) =>
  //   {
  //   // Обработка успешного ответа
  //     console.log('yelp', response);
  //   })
  //   .catch((error) =>
  //   {
  //   // Обработка ошибки
  //     console.error(error);
  //   });

  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer H50el0rBzv6vomGBs6IYlRKpmq1VIZvx4rPoJZ058KcZweNWriJIK766u3lSO4rXdPWPhzz8Oa0Zfhkct8YTn2wQ9htIQRvSo3E3GoVKFsKGbBo54EETZURKb2B3ZHYx',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const [ reviews, setReviews ] = useState([]);
  const logPlaceDetails = async () => {
    const { google } = window;
    const service = await new google.maps.places.PlacesService(document.getElementById('map'));
    service.getDetails({
      placeId,
      fields: [ 'reviews' ],
    }, (place) => {
      // console.log('Place details:', place.reviews);
      setReviews(place.reviews);
    });
  };

  useEffect(() => {
    logPlaceDetails();
    const getYelpReviews = async () => {
     const yelpReviews = await fetch('https://api.yelp.com/v3/businesses/acumen-handyman-seattle/reviews', options);
     return yelpReviews;
    }
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    // .catch((err) => console.error(err));

    console.log(getYelpReviews().then((response) => console.log(response)));
  }, []);

  return (
    <section className={ s.section }>
      <div id="map" />
      {/* <div className="sk-ww-google-reviews" data-embed-id="148829" /> */}
      {reviews.map((review) => (review.rating ? <ReviewItem review={ review } /> : null))}
    </section>
  );
};

export default Reviews;
