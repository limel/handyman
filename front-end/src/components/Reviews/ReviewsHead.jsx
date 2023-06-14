import Link from 'next/link';
import Star from '~/components/UI/Star/Star';
import s from './Reviews.module.scss';

const ReviewsHead = () => (
  <div className={ s['reviews-about'] }>
    <p className={ s['reviews-stars'] }>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      {' '}
      <span>FROM 100+ REVIEWS</span>
    </p>
    <p className={ s['reviews-discription'] }>
      See customer reviews for
      {' '}
      <span className={ s.handyman }>ACUMEN HANDYMAN</span>
      {' '}
      on
      {' '}
      <Link
        href="https://www.google.com/maps/place/Acumen+Handyman/@47.7542364,-122.31856,17z/data=!4m8!3m7!1s0x6744f0b5ef52c5b9:0x2194431aff5cbfc4!8m2!3d47.7542364!4d-122.3159851!9m1!1b1!16s%2Fg%2F11stnpdgd8?entry=ttu"
        target="_blank"
      >
        <span className={ s.blue }>G</span>
        <span className={ s.red }>o</span>
        <span className={ s.yellow }>o</span>
        <span className={ s.blue }>g</span>
        <span className={ s.green }>l</span>
        <span className={ s.red }>e</span>
      </Link>
      ,
      {' '}
      <Link
        href="https://www.thumbtack.com/wa/seattle/handyman/handyvovas-llc/service/460324413169459204?service_pk=460324413169459204&category_pk=109125193401647362&project_pk=485731588100743194&lp_request_pk=485731588096540698&zip_code=98115&is_zip_code_changed=true&click_origin=pro%20list%2Fclick%20pro%20name&is_sponsored=false&utm_source=cma-bing&utm_campaign=s-c-359131856-1232552673873031-77034615046405-kwd-77034654149979%3Aloc-190-e&utm_medium=cpc&msclkid=7bec5386a139147ec32a37eb8e4b727c&hideBack=true"
        className={ s.thumbtack }
        target="_blank"
      >
        Thumbtack
      </Link>
      ,
      {' '}
      <Link
        href="https://www.yelp.com/biz/acumen-handyman-seattle?hrid=YDTAyU_afcv5VTz0F6XsdQ&utm_campaign=bizapp_ios_review_share_popup&utm_medium=copy_link&utm_source=%28direct%29"
        className={ s.yelp }
        target="_blank"
      >
        Yelp
      </Link>
      {' '}
      and other websites.
      More may be seen by clicking the links.
    </p>
  </div>
);

export default ReviewsHead;
