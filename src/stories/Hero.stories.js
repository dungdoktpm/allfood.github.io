import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Hero',
};

export const Hero = () => {
  return /* html */ `
  <div class="hero">
    <div class="hero__inner">
      <div class="title hero__title">
        <span>Discover Your Teste</span>
        <h1>
          We belive good food offer great smile
        </h1>
      </div>
      <p class="text--desc hero__desc">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.
      </p>
      <a href="" class="hero__btn">
        <button class="btn btn--secondary btn--select btn--overlay btn--overlayX">
          Button Secondary
        </button>
      </a>
    </div>
  </div>
  `;
};

