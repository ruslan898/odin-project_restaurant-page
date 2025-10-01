import bearImage from '../img/bear-image.jpg'

window.addEventListener('load', () => {
  const contentBlock = document.querySelector('#content');
  const header = document.createElement('header')
  const main = document.createElement('main');
  const footer = document.createElement('footer');


  const image = document.createElement('img');
  image.src = bearImage;
  image.alt = 'bear-image'
  image.classList.add('img')


  const heading1 = document.createElement('h1');
  heading1.textContent = "🐻 Beary's Café";


  const heading2 = document.createElement('h2');
  heading2.textContent = 'Welcome!';


  const mainParagraph = document.createElement('p');
  mainParagraph.textContent =
    'Pull up a chair and join Beary for a warm breakfast. Fresh coffee and homemade pancakes served daily!';
  mainParagraph.classList.add('text')


  const footerParagraph = document.createElement('p');
  footerParagraph.textContent = '© 2025 Beary’s Café'


  contentBlock.appendChild(header)
  contentBlock.appendChild(main)
  contentBlock.appendChild(footer)
  header.appendChild(heading1)
  main.appendChild(heading2)
  main.appendChild(mainParagraph)
  main.appendChild(image)
  footer.appendChild(footerParagraph)
})