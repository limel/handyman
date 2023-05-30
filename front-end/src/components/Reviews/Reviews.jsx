import { useEffect } from 'react';
import s from './Reviews.module.scss';

const Reviews = () => {
  const placeId = 'ChIJKcxaU1Hj20ARUKAZQD-FLZg';
  // getGoogleReviews(placeId, apiKey);
  // getReviews('ChIJpTiJUVHj20AR4yzdabijjFs', 'AIzaSyDFWvgz9fkV8wnlzz3nsoBKDb17UjMJsv0');
  function logPlaceDetails() {
    const { google } = window;
    const service = new google.maps.places.PlacesService(document.getElementById('map'));
    service.getDetails({
      placeId,
      fields: [ 'reviews' ],
    }, (place, status) => {
      console.log('Place details:', place.reviews);
    });
  }

  useEffect(() => {
    logPlaceDetails();
  }, []);
  return (
    <div id="map" />
  );
};

export default Reviews;
