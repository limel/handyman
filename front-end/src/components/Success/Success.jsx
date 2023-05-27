import s from './Success.module.scss';

const Success = () => (
  <div className={ s['success-block'] }>
    <div className={ s['success-block__content'] }>
      <h3 className={ s.title }>SUCCESS!</h3>
      <p>
        Thank you for your interest to
        <br />
        <span>ACUMEN HANDYMAN!</span>
      </p>
      <p>
        We will contact with you soon!
      </p>
      <p>
        <span>Have a Great day !</span>
      </p>
    </div>
  </div>
);

export default Success;
