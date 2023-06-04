import s from './Star.module.scss';

const Star = () => (
  <i>
    <svg className={ s.star }><use href="/sprite.svg#star" /></svg>
  </i>
);

export default Star;
