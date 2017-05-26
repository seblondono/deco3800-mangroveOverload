const cancel = document.querySelector('.cancel');
const confirm = document.querySelector('.confirm');
const back = document.querySelector('.back');


cancel.addEventListener('click', function(){
  window.location.href = 'site.html';
});

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});

//go from siteSpecification to siteTrees
confirm.addEventListener('click', function(){	
	
	window.location.href = 'siteTrees.html'; 
});