// BEGIN
export default function extractData(value) {
    const sk = value.getElementsByTagName('p');
    let result = [];
    result = Array.from(sk).map(par => par.textContent.trim());
    return result;
};
// END