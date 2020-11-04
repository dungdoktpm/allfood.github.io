import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
};

export const Primary = () => {
  return /* html */ `
    <button class="btn btn--primary btn--overlay btn--overlayY">
      Button Primary
    </button>
  `;
};

export const Secondary = () => {
  return /* html */ `
    <button class="btn btn--secondary btn--select btn--overlay btn--overlayX">
      Button Secondary
    </button>
  `;
};

export const Tertiary = () => {
  return /* html */ `
    <button class="btn btn--tertiary">
      Button Tertiary
    </button>
  `;
};


