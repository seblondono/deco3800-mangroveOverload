// Login button in index.html
const login = document.querySelector('#loginButton');
// Numerical keypad in login.html
const buttons = document.querySelectorAll('.number');
// Password boxes in login.html
const keyBoxes = document.querySelectorAll('.keyBox');

// Access password
const password = '123456';
// Password as typed by user in keypad at login.html
const keyEnter = [];

// From index.html to login.html
function goToPasword() {
  window.location.href = 'login.html';
}

// Identifies the keypad numbers pressed and allows access to the app
function keyPressed(e) {
  // user hit delete
  if (e.target.textContent == '') {
    drawKeyBoxes('delete');
    keyEnter.pop();
  } else if(e.target.textContent == 'Cancel'){ // user hits cancel
    window.location.href = 'index.html';
  } else { // user hits a number key
    keyEnter.push(e.target.textContent);
    // removes the first key entered to keep length in range of password length
    keyEnter.splice(-password.length-1, keyEnter.length - password.length);

    drawKeyBoxes('add');

    // checks if keys entered match password
    if (keyEnter.join('').includes(password)) {
      window.location.href = 'locationMap.html';
    }
  }
}

// draws an * in the keyboxes at login.html
function drawKeyBoxes(action) {
  for (var i = 0; i < keyEnter.length; i++) {
    if (keyBoxes[i].textContent == '' && action == 'add') {
      keyBoxes[i].textContent = '*';
    } else if (keyBoxes[i].textContent == '*' && action == 'delete') {
      keyBoxes[keyEnter.length - 1].textContent = '';
    }
  }
}

// listener for login button at index.html
if (login != null) {
  login.addEventListener('click', goToPasword);
}

// listener for keypad buttons at indes.html
buttons.forEach(button => button.addEventListener('click', keyPressed));
