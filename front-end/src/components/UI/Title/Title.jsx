import cn from 'classnames';
import s from './Title.module.scss';

const Title = ({ children, className, tag }) =>
{
  const Tag = tag || 'h3';

  return (
    <div className={ s['title-block'] }>
      <Tag
        className={ cn(s.title, className) }
      >
        {children}
      </Tag>
      <div className={ s.decorative } />
    </div>
  );
};

export default Title;
