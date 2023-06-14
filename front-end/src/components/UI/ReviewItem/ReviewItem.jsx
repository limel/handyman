import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Star from '../Star/Star';
import s from './ReviewItem.module.scss';

const ReviewItem = (props) => {
  const name = props?.reviewer_name ?? props?.user?.name ?? props?.review_name ?? 'User';
  const photo = props?.reviewer_photo_link
                ?? props?.users?.profile_url
                ?? props?.review_profile
                ?? null;
  const relativeTime = props?.review_date_time ?? props?.time_created ?? props?.review_date ?? 'many years ago';
  const dateString = relativeTime;
  const dateObject = new Date(dateString);
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  const date = (`${ year }-${ month }-${ day }`);
  const text = props?.review_text ?? props?.text ?? props?.review_text ?? 'No review text';
  const url = props?.reviewer_link ?? props?.url ?? props?.review_link ?? null;
  let linkHref;
  const { source } = props;
  switch (source) {
    case 'google':
      linkHref = '/sprite.svg#google';
      break;
    case 'yelp':
      linkHref = '/sprite.svg#yelp';
      break;
    case 'thumbtack':
      linkHref = '/sprite.svg#thumbtack';
      break;
    default:
      linkHref = null;
  }

  const textRef = useRef(null);
  const [ showReadMore, setShowReadMore ] = useState(false);
  const [ showReadLess, setShowReadLess ] = useState(false);
  const [ ellipsisRow, setEllipsisRow ] = useState(null);

  const handlerEllipsisText = () => {
    const textOffsetHeight = textRef.current.offsetHeight - 1;
    const lineHeight = parseInt(window.getComputedStyle(textRef.current).getPropertyValue('line-height'), 10);

    if ((textOffsetHeight / lineHeight) > 3 && !showReadMore) {
      setEllipsisRow(3);
      setShowReadMore(true);
      setShowReadLess(false);
    }
  };

  const readMore = () => {
    setEllipsisRow(null);
    setShowReadMore(false);
    setShowReadLess(true);
  };

  const readLess = () => {
    setEllipsisRow(3);
    setShowReadMore(true);
    setShowReadLess(false);
  };

  useEffect(() => {
    handlerEllipsisText();
  }, [ text ]);

  return (
    <div className={ s.review }>
      <div className={ s['main-block'] }>
        <div className={ s['main-info'] }>
          <div className={ s.image }>
            {photo ? (
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
            ) : (
              <span className={ s['image-placeholder'] }>
                {name ? name.split(' ').map((nameString) => nameString.charAt(0)).join('') : name}
              </span>
            )}
          </div>
          <p className={ s.name }>{ name }</p>
          <p className={ s.time }>{ !day ? relativeTime : date }</p>
          <div className={ s.rating }>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className={ s['text-block'] }>
            <div
              className={ s.text }
              ref={ textRef }
              style={ ellipsisRow !== null
                ? { WebkitLineClamp: ellipsisRow }
                : undefined }
            >
              { text }
            </div>
            {showReadMore
              ? <button type="button" className={ s['read-more'] } onClick={ readMore }>READ MORE&gt;&gt;&gt;</button>
              : null}
            {showReadLess
              ? <button type="button" className={ s['read-less'] } onClick={ readLess }>READ LESS&lt;&lt;&lt;</button>
              : null}
          </div>
        </div>
        <Link href={ url ?? '/' } prefetch={ false } className={ s.link } target="_blank">
          <svg className={ s['link-icon'] }><use href={ linkHref } /></svg>
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
