var display = document.querySelector('#counterDisplay>h1');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var back = document.querySelector('.back');
var cancel = document.querySelector('.counterCancel');
var confirm = document.querySelector('.counterConfirm');

back.addEventListener('click', function() {
  window.location.href = "siteTrees.html";
});

cancel.addEventListener('click', function() {
  window.location.href = "siteTrees.html";
});

confirm.addEventListener('click', function() {
  window.location.href = "siteTrees.html";
});

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
