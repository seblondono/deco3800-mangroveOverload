const locations = document.querySelector('#locations');
const sites = document.querySelector('#sites');
const species = document.querySelector('#species');

locations.addEventListener('click', function(){
  window.location.href = 'configLocations.html';
});

sites.addEventListener('click', function(){
  window.location.href = 'configSites.html';
});

species.addEventListener('click', function(){
  window.location.href = 'configSpecies.html';
});


