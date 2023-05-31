import cn from 'classnames';
import s from './Success.module.scss';

const Success = ({ className }) => (
  <div className={ cn(s['success-block'], className) }>
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
