import 'whatwg-fetch';

export default () => {
  // BEGIN
   const inp = document.querySelectorAll('input[data-autocomplete][data-autocomplete-name]');

    inp.forEach(val => {
      val.addEventListener('input', async (e) => {

        const uValue = e.target.value.trim();
        const urlStr = val.dataset.autocomplete;
        const listN = val.dataset.autocompleteName;
        const currUrl = new URL(urlStr, window.location.origin);
        
        currUrl.searchParams.set('search', uValue);

        try {
          const resp = await fetch(currUrl);
          if (!resp.ok) throw new Error('Failed fetch');

          const it = await resp.json();
          const tegul = document.querySelector(`ul[data-autocomplete-name="${listN}"]`);

          if (!tegul) return;

          tegul.textContent = '';

          if (Array.isArray(it) && it.length) {
            it.forEach(nn => {
              const tegli = document.createElement('li');
 
              tegli.textContent = nn;
              tegul.appendChild(tegli);
            });
          } else {
            const li = document.createElement('li');

            li.textContent = 'Nothing';
            tegul.appendChild(li);
          }
        } catch {
          const ttul = document.querySelector(`ul[data-autocomplete-name="${listN}"]`);

          if (!ttul) return;
          ttul.textContent = '';

          const ttli = document.createElement('li');

          ttli.textContent = 'Nothing';
          ttul.appendChild(ttli);

        }
      });
    });
  
  // END
};
