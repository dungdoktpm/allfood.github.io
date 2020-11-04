import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Caption',
};

export const Caption = () => {
  return /* html */ `
  <div class="caption">
    <div class="caption__icon">
      <i class="flaticon-chef flaticon-restaurant"></i>
    </div>
    <div class="caption__content">
      <p>
        Ut enim ad minim veniam, quis nostrud exer.
      </p>
    </div>
  </div>
  `;
};

