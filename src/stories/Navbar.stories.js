import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Navbar',
};

export const Navbar = () => {
  return /* html */ `
  <nav class="nav">
    <ul class="menu">
      <li class="menu__item">
        <a href="index.html" class="menu__link">Home</a>
      </li>
      <li class="menu__item">
        <a href="" class="menu__link">About</a>
      </li>
      <li class="menu__item">
        <a href="" class="menu__link">Menu</a>
      </li>
      <li class="menu__item">
        <a href="" class="menu__link">Blog</a>
      </li>
      <li class="menu__item">
        <a href="" class="menu__link">Contact</a>
      </li>
    </ul>
    <button class="btn btn--primary btn--overlay btn--overlayY">
      Order Online
    </button>
  </nav>
  `;
};


