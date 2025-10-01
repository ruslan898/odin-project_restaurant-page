import './styles.css';
import homepage from './modules/homepage';
import menuPage from './modules/menu-page';
import aboutPage from './modules/about-page';


window.addEventListener('load', () => {
  homepage();
});

const clearPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';
};

const menuBtns = document.querySelectorAll('.menu-item');
menuBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const data = btn.dataset.page;
    console.log(data);

    switch (data) {
      case 'homepage':
        clearPage();
        homepage();
        break;
      case 'menu-page':
        clearPage();
        menuPage();
        break;
      case 'about-page':
        clearPage();
        aboutPage();
        break;
    }
  });
});
