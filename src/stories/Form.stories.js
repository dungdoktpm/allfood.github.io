import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Form',
};

export const FormSubscribe = () => {
  return /* html */ `
  <div class="form form--subscribe">
    <div class="group-item">
      <input type="text" placeholder="Your Email">
      <button class="btn btn--tertiary">
        Button Tertiary
      </button>
    </div>
  </div>
  `;
};


