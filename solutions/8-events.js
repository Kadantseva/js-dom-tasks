export default () => {
  // BEGIN
    const button = document.getElementById('alert-generator');
    const alertsCont = document.querySelector('.alerts');
    let alertCounter = 0;
    
    button.addEventListener('click', () => {

      alertCounter = alertCounter + 1;
      const alertD = document.createElement('div');
      alertD.className = 'alert alert-primary'; 
      alertD.textContent = `Alert ${alertCounter}`; 
      alertsCont.prepend(alertD);

    });

  // END
};