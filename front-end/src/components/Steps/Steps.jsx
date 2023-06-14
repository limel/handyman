import s from './Steps.module.scss';

const Steps = () => {
  const borderSvg = (
    <svg width="250" height="152" viewBox="0 0 250 152" fill="none" xmlns="http://www.w3.org/2000/svg" className={ s.border }>
      <g filter="url(#filter)">
        <path fillRule="evenodd" clipRule="evenodd" d="M189 5H61C30.0721 5 5 30.0721 5 61V91C5 121.928 30.0721 147 61 147H189C219.928 147 245 121.928 245 91V61C245 30.0721 219.928 5 189 5ZM61 0C27.3106 0 0 27.3106 0 61V91C0 124.689 27.3106 152 61 152H189C222.689 152 250 124.689 250 91V61C250 27.3106 222.689 0 189 0H61Z" fill="url(#gradient)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M189 5H61C30.0721 5 5 30.0721 5 61V91C5 121.928 30.0721 147 61 147H189C219.928 147 245 121.928 245 91V61C245 30.0721 219.928 5 189 5ZM61 0C27.3106 0 0 27.3106 0 61V91C0 124.689 27.3106 152 61 152H189C222.689 152 250 124.689 250 91V61C250 27.3106 222.689 0 189 0H61Z" fill="url(#gradient1)" />
      </g>
      <defs>
        <filter id="filter" x="-50" y="-50" width="350" height="252" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2963_5427" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2963_5427" result="shape" />
        </filter>
        <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(138.443 98.6806) rotate(150.361) scale(141.91 99.0189)">
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(136.122 98.6807) rotate(-143.006) scale(120.389 101.739)">
          <stop stopColor="#F5F5F5" />
          <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );

  return (
    <div className={ s['steps-main-block'] }>
      <p>What To Expect After You Fill Out This Form</p>
      <div className={ s['step-container'] }>
        <div className={ s.step }>
          { borderSvg }
          <div>
            <h3>1 STEP</h3>
            <div className={ s.icon }><svg><use href="/sprite.svg#step1" /></svg></div>
          </div>
          <p>Acumen Handyman  will contact you during business hours</p>
        </div>
        <div className={ s.step }>
          { borderSvg }
          <div>
            <h3>2 STEP</h3>
            <div className={ s.icon }><svg><use href="/sprite.svg#step2" /></svg></div>
          </div>
          <p>
            We will discuss your
            project and quote Answer your questions
          </p>
        </div>
        <div className={ s.step }>
          { borderSvg }
          <div>
            <h3>3 STEP</h3>
            <div className={ s.icon }><svg><use href="/sprite.svg#step3" /></svg></div>
          </div>
          <p>Acumen Handyman  will contact you during business hours</p>
        </div>
      </div>
      <p>Fill Out This Form</p>
    </div>
  );
};

export default Steps;
