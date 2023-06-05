import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Star from '../Star/Star';
import s from './ReviewItem.module.scss';

const ReviewItem = ({
  photo, name, relativeTime, rating, text, url, linkHref,
  // review,
}) => {
  // console.log(review);
  const textRef = useRef(null);
  const [ showReadMore, setShowReadMore ] = useState(false);
  const [ ellipsisRow, setEllipsisRow ] = useState(null);

  // if (review !== undefined) {
  // const {
  //   author_name: name,
  //   author_url: url,
  //   rating,
  //   text,
  //   relative_time_description: relativeTime,
  //   profile_photo_url: photo,
  // } = review;

  const handlerEllipsisText = () => {
    const textOffsetHeight = textRef.current.offsetHeight - 1;
    const lineHeight = parseInt(window.getComputedStyle(textRef.current).getPropertyValue('line-height'), 10);

    if ((textOffsetHeight / lineHeight) > 3) {
      setEllipsisRow(3);
      setShowReadMore(true);
    }
  };

  const readMore = () => {
    setEllipsisRow(null);
    setShowReadMore(false);
  };

  useEffect(() => {
    handlerEllipsisText();
  }, [ text ]);

  return (
    <div className={ s.review }>
      <div className={ s['main-block'] }>
        <div className={ s['main-info'] }>
          <div className={ s.image }>
            { photo && (
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
            )}
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
              ? <div className={ s['read-more'] } onClick={ readMore }>READ MORE&gt;&gt;&gt;</div>
              : null}
          </div>
          {/* </div> */}
        </div>
        <Link href={ url } prefetch={ false } className={ s.link } target="_blank">
          <svg className={ s['link-icon'] }><use href={ linkHref } /></svg>
        </Link>
      </div>
      <div className={ s.discription }>
        {/* <div className={ s.rating }><Star /></div> */}
        {/* <div className={ s.text }>{ text }</div> */}
      </div>
    </div>
  );
  // }
  // TODO - create fallback
  // return null;
};
export default ReviewItem;
