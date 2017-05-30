var display = document.querySelector('#counterDisplay>h1');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');

plus.addEventListener('click', add);
minus.addEventListener('click', subtract);

function add(){
  var result = parseInt(display.textContent);
  result = result + 1;
  display.innerText = result;
}

function subtract() {
  if ((display.innerText - 1) < 0) {
    return;
  } else {
    var result = parseInt(display.textContent);
    result = result - 1;
    display.innerText = result;
  }
}
