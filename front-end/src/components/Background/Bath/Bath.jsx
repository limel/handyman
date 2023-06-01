import s from './Bath.module.scss';

export default function Bath({
  bottom, left, top, width = 144, height = 132,
}) {
  return (
    <svg width={ width } height={ height } viewBox="0 0 144 132" fill="none" xmlns="http://www.w3.org/2000/svg" style={ { bottom, top, left } } className={ s.bath }>
      <path d="M1.11602 64.0744C1.06929 61.5013 2.04205 59.0147 3.8203 57.1617C5.59853 55.3088 8.0366 54.2412 10.5981 54.1938L120.059 52.1691L119.385 15.0915C119.355 13.4703 118.847 11.8946 117.926 10.5634C117.004 9.23225 115.711 8.20535 114.208 7.61243C112.706 7.01952 111.062 6.88719 109.485 7.23217C107.908 7.57714 106.468 8.38395 105.346 9.55066L101.108 13.9673C102.355 15.7662 103.219 17.8036 103.648 19.9527C104.077 22.1019 104.061 24.3168 103.6 26.4596C103.14 28.6024 102.246 30.6271 100.973 32.4079C99.7006 34.1886 98.0766 35.6872 96.2025 36.8103C95.5941 37.1867 94.8783 37.3492 94.1679 37.2722C93.4576 37.1951 92.7929 36.8829 92.2786 36.3847L74.3897 19.0618C73.8752 18.5638 73.5403 17.908 73.4376 17.1977C73.3349 16.4874 73.4703 15.763 73.8225 15.1384C74.8772 13.2051 76.3189 11.5119 78.0568 10.1655C79.7947 8.81914 81.7912 7.84866 83.9205 7.31516C86.0499 6.78167 88.2661 6.69672 90.4296 7.06565C92.5931 7.43459 94.6571 8.24942 96.4916 9.45887L100.711 5.062C102.716 2.97278 105.292 1.52757 108.114 0.909136C110.936 0.290706 113.877 0.526843 116.566 1.58768C119.254 2.64852 121.568 4.48641 123.216 6.86889C124.864 9.25137 125.772 12.0714 125.824 14.9724L126.498 52.05L132.937 51.9309C135.212 51.8845 137.43 52.6486 139.199 54.0878C140.967 55.5269 142.171 57.5484 142.597 59.7941C143.024 62.0398 142.645 64.3647 141.529 66.3572C140.412 68.3497 138.63 69.8812 136.498 70.6803L136.802 87.4453C136.948 95.4448 134.39 103.258 129.546 109.61L132.794 115.018C134.04 117.218 134.38 119.821 133.742 122.27C133.105 124.719 131.539 126.822 129.38 128.128C127.221 129.434 124.639 129.841 122.186 129.262C119.733 128.683 117.602 127.164 116.248 125.029L114 121.298C110.18 122.784 106.13 123.588 102.034 123.674L44.0845 124.746C39.9897 124.813 35.9148 124.162 32.0434 122.821L29.9483 126.625C29.3342 127.741 28.5073 128.724 27.5149 129.519C26.5224 130.314 25.3838 130.905 24.1641 131.258C22.9444 131.611 21.6675 131.72 20.4062 131.577C19.145 131.434 17.9241 131.043 16.8133 130.427C15.7025 129.81 14.7235 128.979 13.9323 127.983C13.141 126.986 12.553 125.842 12.2018 124.617C11.8506 123.392 11.7431 122.109 11.8854 120.842C12.0277 119.575 12.417 118.349 13.0311 117.233L16.0707 111.706C11.0036 105.537 8.1674 97.8245 8.02472 89.8272L7.72027 73.0622C5.83153 72.4304 4.18333 71.2279 3.00117 69.619C1.81899 68.0102 1.16058 66.0737 1.11602 64.0744ZM80.8489 16.338L94.758 29.7975C96.4661 27.9317 97.3797 25.4687 97.3036 22.9353C97.2274 20.4018 96.1675 17.9991 94.3505 16.2408C92.5334 14.4825 90.1035 13.5083 87.5804 13.5265C85.0573 13.5446 82.6413 14.5538 80.8489 16.338ZM121.763 121.692C122.23 122.365 122.935 122.834 123.734 123.004C124.534 123.175 125.368 123.033 126.067 122.609C126.767 122.185 127.28 121.509 127.502 120.719C127.724 119.929 127.639 119.084 127.264 118.355L124.995 114.563C123.385 116.014 121.645 117.314 119.797 118.444L121.763 121.692ZM19.9209 124.74C20.2909 124.947 20.6981 125.079 21.119 125.128C21.5399 125.177 21.9664 125.142 22.3738 125.025C22.7813 124.908 23.1618 124.712 23.4935 124.447C23.8252 124.182 24.1016 123.854 24.3069 123.481L26.1436 120.167C24.2567 119.104 22.4707 117.87 20.8079 116.481L18.6849 120.347C18.2694 121.096 18.1672 121.981 18.4008 122.806C18.6344 123.631 19.1847 124.329 19.9306 124.746L19.9209 124.74ZM43.967 118.278L101.917 117.206C109.599 117.056 116.908 113.85 122.241 108.293C127.574 102.736 130.495 95.2812 130.363 87.5644L130.069 71.3944L14.1699 73.5382L14.4636 89.7081C14.6122 97.4247 17.802 104.766 23.3331 110.122C28.8642 115.479 36.2849 118.412 43.967 118.278ZM10.8331 67.1297L133.171 64.8669C134.025 64.8511 134.838 64.4952 135.431 63.8776C136.023 63.2599 136.348 62.4311 136.332 61.5734C136.317 60.7157 135.962 59.8993 135.348 59.304C134.733 58.7087 133.908 58.3831 133.054 58.3989L10.7156 60.6618C9.86174 60.6775 9.04905 61.0334 8.4563 61.6511C7.86357 62.2687 7.53931 63.0976 7.55489 63.9553C7.57047 64.813 7.92459 65.6293 8.53936 66.2246C9.15413 66.8199 9.9792 67.1455 10.8331 67.1297Z" fill="#C4C4C4" fillOpacity="0.09" />
    </svg>
  );
}
