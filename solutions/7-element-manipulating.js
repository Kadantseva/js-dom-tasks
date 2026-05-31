import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
    const allsElements = document.body.getElementsByTagName('*');
    for (const el of allsElements) {
        const newNames = [];

        for (const cl of el.classList) { newNames.push(camelCase(cl));};
        el.className = '';
        newNames.forEach(cc => el.classList.add(cc));
    }
};
// END