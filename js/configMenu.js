const locations = document.querySelector('.locations');
const sites = document.querySelector('.sites');
const back = document.querySelector('.back');
const treeSpecies = document.querySelector('.tree-species');

locations.addEventListener('click', function(){
  window.location.href = 'configLocations.html';
});

sites.addEventListener('click', function(){
  window.location.href = 'configSites.html';
});

treeSpecies.addEventListener('click', function(){
  window.location.href = 'configSpecies.html';
});

back.addEventListener('click', function(){
  window.location.href = 'index.html';
});
