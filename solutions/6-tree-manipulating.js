// BEGIN
export default function prettify(document) {

    const divs = document.querySelectorAll('div');
    divs.forEach(diver => {
        const childNodes = Array.from(diver.childNodes);

    childNodes.forEach(nod => {
        if (nod instanceof Text && nod.textContent.trim() !== '') {
            let par = document.createElement('p');
            par.textContent = nod.textContent;
            nod.replaceWith(par);
            }
        });
    });
};
// END