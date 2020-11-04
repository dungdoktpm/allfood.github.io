import { action } from '@storybook/addon-actions';
import logo from '../assets/images/logo.png';
export default {
  title: 'Components/Header',
};

export const Header = () => {
  return /* html */ `
  <div class="header">
    <div class="header__logo">
      <img src="${logo}" alt="">
    </div>
    <!--btn toggle-->
    <div class="header__toggle">
    </div>
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
  </div>
  `;
};


