import { action } from '@storybook/addon-actions';
import bg01 from '../assets/images/blog1.png';
export default {
  title: 'Components/Gallery',
};

export const GallerySingle = () => {
  return /* html */ `
  <div class="gallery-single text--center">
    <div class="gallery-single__inner bg-img gallery-single--full-height" style="background-image: url('${bg01}')">
      <div class="gallery-single__content text--center g-animation">
        <span class="price">$25</span>
        <h4 class="g-title">
          Delicious Food
        </h4>
        <p class="text--desc g-desc">
          Ut enim ad minim veniam quis nostr.
        </p>
        <a href="">
          <button class="btn btn--secondary btn--overlay btn--overlayX">
            Order Now
          </button>
        </a>
      </div>
    </div>
  </div>
  `;
};

export const GalleryOptions = () => {
  return /* html */ `
    <div class="gallery__options">
      <ul>
        <li class="option__item">Speccial</li>
        <li class="option__item">Lunch</li>
        <li class="option__item">Brakefirst</li>
        <li class="option__item">Dinner</li>
      </ul>
    </div>
  `;
};

