import s from './CallbackForm.module.scss';
import Title from '../UI/Title/Title';

const CallbackForm = () => (
  <section className={ s.section }>
    <Title>Get a Quote</Title>
    <div className={ s['steps-main-block'] }>
      <p>What To Expect After You Fill Out This Form</p>
      <div className={ s['step-container'] }>
        <div className={ s.step }>
          <div>
            <h3>1 STEP</h3>
            <div className={ s.icon }><svg><use href="/sprite.svg#step1" /></svg></div>
          </div>
          <p>Acumen Handyman  will contact you during business hours</p>
        </div>
        <div className={ s.step }>
          <div>
            <h3>2 STEP</h3>
            <div className={ s.icon }><svg><use href="/sprite.svg#step2" /></svg></div>
          </div>
          <p>
            We will discuss your
            project and quote ,answer your questions
          </p>
        </div>
        <div className={ s.step }>
          <div>
            <h3>3 STEP</h3>
            <div className={ s.icon }><svg><use href="/sprite.svg#step3" /></svg></div>
          </div>
          <p>Acumen Handyman  will contact you during business hours</p>
        </div>
      </div>
      <p>Fill Out This Form</p>
    </div>
  </section>
);

export default CallbackForm;
