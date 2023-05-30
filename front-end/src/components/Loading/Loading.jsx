import cn from 'classnames';
import s from './Loading.module.scss';

const Loading = ({ className }) => (
  <div className={ cn(s['loading-container'], className) }>
    <p>Loading in process...</p>
    <div className={ s.ring } />
    <p>Please wait a moment</p>
  </div>
);

export default Loading;
