const cancel = document.querySelector('#bye');
const confirm = document.querySelector('.confirm');
const back = document.querySelector('.back');



cancel.addEventListener('click', function(){
  window.location.href = 'siteSpecification.html';
});

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});
