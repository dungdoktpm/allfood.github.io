import { action } from '@storybook/addon-actions';
import blog01 from '../assets/images/blog1.png';
export default {
  title: 'Components/Blog',
};

export const BlogSingle = () => {
  return /* html */ `
  <div class="blog-single">
    <a href="blog-detail.html">
      <div class="blog-single__img">
        <img src="${blog01}" alt="">
      </div>
      <div class="blog-single__cap">
        <span class="time text--uppercase">23 Dec, 2020</span>
        <h4>
          Addiction When Food Plate Becomes
        </h4>
      </div>
    </a>
  </div>
  `;
};

