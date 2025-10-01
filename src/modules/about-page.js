function aboutPage() {
  const contentBlock = document.querySelector('#content');

  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  const heading1 = document.createElement('h1');
  heading1.textContent = "🐻 Beary's Café";

  const heading2 = document.createElement('h2');
  heading2.textContent = 'Contact Us';
  
  main.appendChild(heading2);

  const paragraphsContent = [
    'Email: <a href="mailto:beary@cafe.com">beary@cafe.com</a>',
    'Location: Forest Avenue 42',
    'Open daily: 7am – 3pm',
  ];

  for (let index = 0; index < paragraphsContent.length; index++) {
    const p = document.createElement('p');
    p.innerHTML = paragraphsContent[index];
    main.appendChild(p);
  }

  const footerParagraph = document.createElement('p');
  footerParagraph.textContent = '© 2025 Beary’s Café';

  contentBlock.appendChild(header);
  contentBlock.appendChild(main);
  contentBlock.appendChild(footer);
  header.appendChild(heading1);
  footer.appendChild(footerParagraph);
}

export default aboutPage;
