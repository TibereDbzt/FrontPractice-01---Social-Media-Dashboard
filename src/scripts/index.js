import '../styles/main.sass';

function component () {
  let element = document.createElement('div');
  element.innerHTML = 'Hello S4 !';
  return element;
}
document.body.appendChild(component());

console.log('OK')
