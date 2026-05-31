export default () => {
  // BEGIN
  const navTabEl = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');

    navTabEl.forEach(navTabElem => {
      navTabElem.addEventListener('click', (e) => {

        e.preventDefault();
        const navCont = navTabElem.closest('.nav');
        const tabCont = document.querySelector(navTabElem.dataset.bsTarget).closest('.tab-content');
        navCont.querySelectorAll('.nav-link').forEach(v => v.classList.remove('active'));
        tabCont.querySelectorAll('.tab-pane').forEach(ss => ss.classList.remove('active'));
        navTabElem.classList.add('active');
        const tContent = document.querySelector(navTabElem.dataset.bsTarget);
        tContent.classList.add('active');
      });
    }); 
  // END
};
