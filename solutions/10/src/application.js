import escapeHtml from 'escape-html';

// BEGIN
export default function setForm() {
    const ft = document.querySelector('form');
    ft.addEventListener('submit', event => {

      event.preventDefault();

      const email = ft.elements.email.value;
      const name = ft.elements.name.value;
      const commen = ft.elements.comment.value;
  
      const sEmail = escapeHtml(email);
      const sName = escapeHtml(name);
      const sComment = escapeHtml(commen);
      const resD = document.createElement('div');
        resD.innerHTML = `
            <p>Feedback has been sent</p>
            <div>Email: ${sEmail}</div>
            <div>Name: ${sName}</div>
            <div>Comment: ${sComment}</div>`;
        ft.replaceWith(resD);
        });
  };

  
// END