// BEGIN
export default function solution(adress) {

    window.location.href = adress;
    const value = navigator.userAgent; 
    const version = value.substring(value.indexOf('Chrome/') + 7, value.indexOf('.', value.indexOf('Chrome/') + 7));

    return `Mozilla/5.0 ${adress}`;
};
// END