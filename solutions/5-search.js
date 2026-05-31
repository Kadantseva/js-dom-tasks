export default (document) => {
  // BEGIN
  const valueContent = document.querySelector('.content');
  const title = valueContent.querySelector('h1').textContent.trim();
  const description = valueContent.querySelector('.description').textContent.trim();
  const articleNodes = valueContent.querySelectorAll('.links > div');

  const items = Array.from(articleNodes).map(dat => {
      const articleTit = dat.querySelector('h2 > a').textContent.trim();
      const articleDescr = dat.querySelector('p').textContent.trim();
      return {
        title: articleTit,
        description: articleDescr,
      };
  });

  return {
      title,
      description,
      items,
  };

  // END
};
