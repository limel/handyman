import cn from 'classnames';
import s from './Title.module.scss';

const Title = ({ children, className }) => (
  <div className={ s['title-block'] }>
    <h1
      className={ cn(s.title, className) }
    >
      {children}
    </h1>
    <div className={ s.decorative }>
      <div className={ s.decorative__rectangle } />
      <div className={ s.decorative__circles }>
        <div className={ s.decorative__circle } />
        <div className={ s.decorative__circle } />
      </div>
    </div>
  </div>
);

export default Title;
