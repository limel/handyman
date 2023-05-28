import s from './Loading.module.scss';

const Loading = () => (
  <div className={ s['loading-container'] }>
    <p>Loading in process...</p>
    <div className={ s.ring } />
    <p>Please wait a moment</p>
  </div>
);

export default Loading;
