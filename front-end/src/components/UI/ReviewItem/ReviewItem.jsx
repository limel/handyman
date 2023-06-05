import Image from 'next/image';
import Link from 'next/link';
import Star from '../Star/Star';
import s from './ReviewItem.module.scss';

const ReviewItem = ({
  // photo, name, relativeTime, rating, text, url,
  review,
}) => {
  console.log(review);
  // return null;
  if (review !== undefined) {
    const {
      author_name: name,
      author_url: url,
      rating,
      text,
      relative_time_description: relativeTime,
      profile_photo_url: photo,
    } = review;

    return (
      <div className={ s.review }>
        <div className={ s['main-block'] }>
          <div className={ s['main-info'] }>
            <div className={ s.image }>
              <Image
                src={ photo }
                alt="Review avatar"
                fill
                style={ {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  inset: ' auto 0 0 auto',
                } }
              />
            </div>
            {/* <div> */}
            <p className={ s.name }>{ name }</p>
            <p className={ s.time }>{ relativeTime }</p>
            <div className={ s.rating }>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className={ s.text }>{ text }</div>
            {/* </div> */}
          </div>
          <Link href={ url } prefetch={ false }>
            <svg className={ s['link-icon'] }><use href="/sprite.svg#google" /></svg>
          </Link>
        </div>
        <div className={ s.discription }>
          {/* <div className={ s.rating }><Star /></div> */}
          {/* <div className={ s.text }>{ text }</div> */}
        </div>
      </div>
    );
  }
  // TODO - create fallback
  return null;
};
export default ReviewItem;
