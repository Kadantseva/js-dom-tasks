// BEGIN
function reforse() {
    document.body.innerHTML = document.body.innerHTML.split('\n').map(str => str.trim()).filter(str => str !== '').map(str => `<p>${str}</p>`).join('\n');
};
reforse();
// END