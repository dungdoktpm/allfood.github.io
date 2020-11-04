import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Single',
};

export const Single = () => {
  return /* html */ `
  <div class="single">
    <div class="single__inner">
      <div class="single__icon text--center">
        <span class="flaticon-chef"></span>
      </div>
      <div class="single__content text--center">
        <h4 class="single__cap">
          <a href="">Best Chef</a>
        </h4>
        <p class="single__desc text--desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
    </div>
  </div>
  `;
};

