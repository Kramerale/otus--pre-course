const button = document.querySelector('.button');
button.hidden=true;
button.addEventListener('click', function() {
    const text = getInputText();
    addPar(text);
    clearInput();
});

const text = document.querySelector('.input-text');
text.addEventListener('input', function() {
    button.hidden=false;
});

function getInputText() {
  const input = document.querySelector('.input-text');
  return input.value;
}

function addPar(text) {
  const newPar = document.createElement('p');
  newPar.innerText = text;

  const parList = document.querySelector('.paragrafs');
  parList.append(newPar);

  const listP = document.querySelectorAll('p');
  if (listP.length > 5) {
    listP[0].remove();
  }
}

function clearInput() {
  const input = document.querySelector('.input-text');
  input.value = '';
}