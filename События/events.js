const button = document.querySelector(".button");
button.hidden = true;
button.addEventListener("click", () => {
  const text = getInputText();
  addPar(text);
  clearInput();
});

const text = document.querySelector(".input-text");
text.addEventListener("input", () => {
  button.hidden = false;
});

export function getInputText() {
  const input = document.querySelector(".input-text");
  return input.value;
}

getInputText();

export function addPar(text) {
  const newPar = document.createElement("p");
  newPar.innerText = text;

  const parList = document.querySelector(".paragrafs");
  parList.append(newPar);

  const listP = document.querySelectorAll("p");
  if (listP.length > 5) {
    listP[0].remove();
  }
}

addPar(text);

export function clearInput() {
  const input = document.querySelector(".input-text");
  input.value = "";
}

clearInput();
