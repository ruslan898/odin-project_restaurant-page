function menuPage() {
  const contentBlock = document.querySelector('#content');

  const header = document.createElement('header')
  const main = document.createElement('main');
  const footer = document.createElement('footer');


  const heading1 = document.createElement('h1');
  heading1.textContent = "🐻 Beary's Café";


  const heading2 = document.createElement('h2');
  heading2.textContent = 'Our Menu';


  const ul = document.createElement('ul')
  const listContent = ['🥞 Pancakes — fluffy & golden', '☕ Fresh Brewed Coffee', '🥐 Croissants — buttery & warm', '🍯 Honey Toast']

  for (let index = 0; index < listContent.length; index++) {
    const li = document.createElement('li');
    li.textContent = listContent[index]
    ul.appendChild(li)
  }



  const footerParagraph = document.createElement('p');
  footerParagraph.textContent = '© 2025 Beary’s Café'


  contentBlock.appendChild(header)
  contentBlock.appendChild(main)
  contentBlock.appendChild(footer)
  header.appendChild(heading1)
  main.appendChild(heading2)
  main.appendChild(ul)
  footer.appendChild(footerParagraph)
}

export default menuPage;