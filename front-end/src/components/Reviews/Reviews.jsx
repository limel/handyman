import { useEffect } from 'react';
import axios from 'axios';
import s from './Reviews.module.scss';

const Reviews = () =>
{
  const placeId = 'ChIJKcxaU1Hj20ARUKAZQD-FLZg';
  const apiKey = 'AIzaSyDFWvgz9fkV8wnlzz3nsoBKDb17UjMJsv0';

  axios.get('https://data.accentapi.com/feed/148829.json')
    .then((response) =>
    {
    // Обработка успешного ответа
      console.log(response.data.reviews);
    })
    .catch((error) =>
    {
    // Обработка ошибки
      console.error(error);
    });

  function logPlaceDetails()
  {
    const { google } = window;
    const service = new google.maps.places.PlacesService(document.getElementById('map'));
    service.getDetails({
      placeId,
      fields: [ 'reviews' ],
    }, (place, status) =>
    {
      console.log('Place details:', place.reviews);
    });
  }

  useEffect(() =>
  {
    logPlaceDetails();
  }, []);
  return (
    <>
      <div id="map" />
      <div className="sk-ww-google-reviews" data-embed-id="148829" />
    </>
  );
};

export default Reviews;
