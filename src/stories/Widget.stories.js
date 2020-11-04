import { action } from '@storybook/addon-actions';
import img01 from '../assets/images/img01.png'
export default {
  title: 'Components/Widget',
};

export const Widget = () => {
  return /* html */ `
  <div class="widget">
    <h4 class="widget__title">
      Navigation
    </h4>
    <div class="widget__content">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">Testimonial</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">Contacts</a></li>
      </ul>
    </div>
  </div>
  `;
};

export const WidgetImg = () => {
  return /* html */ `
  <div class="widget widget--img">
    <h4 class="widget__title">
      Navigation
    </h4>
    <div class="widget__content">
      <div class="widget__img">
        <img src="${img01}"/>
      </div>
      <div class="widget__img">
        <img src="${img01}"/>
      </div>
      <div class="widget__img">
        <img src="${img01}"/>
      </div>
      <div class="widget__img">
        <img src="${img01}"/>
      </div>
      <div class="widget__img">
        <img src="${img01}"/>
      </div>
      <div class="widget__img">
        <img src="${img01}"/>
      </div>
    </div>
  </div>
  `;
};

