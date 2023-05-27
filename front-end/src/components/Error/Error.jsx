import s from './Error.module.scss';

const Error = () => (
  <div className={ s['error-block'] }>
    <div className={ s['error-block__content'] }>
      <h3 className={ s.title }>OOPS!</h3>
      <p>
        There was an error =(
      </p>
      <p>
        Please TRY AGAIN
        {' '}
        <br />
        or call us 218-255-4388
      </p>
    </div>
  </div>
);

export default Error;
