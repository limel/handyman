import s from './Background.module.scss';

export default function Background({ children }) {
  return (
    <div className={ s.container }>
      {children}
    </div>
  );
}
