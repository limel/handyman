import axios from 'axios';
import { useEffect } from 'react';
import s from './Reviews.module.scss';

const Reviews = () =>
{
  const placeId = 'ChIJKcxaU1Hj20ARUKAZQD-FLZg';
  const apiKey = 'AIzaSyDFWvgz9fkV8wnlzz3nsoBKDb17UjMJsv0';

  function getGoogleReviews(placeId, apiKey)
  {
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${ placeId }&fields=review&key=${ apiKey }`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }

  async function getReviews(place_id, apiKey)
  {
    try
    {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
        params: {
          place_id,
          fields: 'review',
          key: apiKey,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      });

      const { reviews } = response.data.result;

      reviews.forEach((review) =>
      {
        console.log(`Author: ${ review.author_name }`);
        console.log(`Rating: ${ review.rating }`);
        console.log(`Text: ${ review.text }`);
        console.log('\n');
      });
    }
    catch (error)
    {
      console.error(error);
    }
  }

  // getGoogleReviews(placeId, apiKey);
  // getReviews('ChIJpTiJUVHj20AR4yzdabijjFs', 'AIzaSyDFWvgz9fkV8wnlzz3nsoBKDb17UjMJsv0');
  function logPlaceDetails()
  {
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
    <div id="map" />
  );
};

export default Reviews;
