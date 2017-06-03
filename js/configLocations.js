var addLocation = document.querySelector('#addLocation');
var editLocation = document.querySelectorAll('.edit');
var back = document.querySelector('.back');

console.log(editLocation);

editLocation.forEach(editButton => editButton.addEventListener('click', addLocations));

addLocation.addEventListener('click', addLocations);

function addLocations() {
  window.location.href = 'configAddLocation.html';
}

back.addEventListener('click', function() {
  window.location.href = 'configMenu.html';
});
