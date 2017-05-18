const cancel = document.querySelector('#cancel');
const accept = document.querySelector('#accept');
const back = document.querySelector('.back');

//Javascript fordward functionalities
accept.addEventListener('click',function goToSiteTreeBranch() {

  window.location.href = "siteTrees.html";
});


//backwards
back.addEventListener('click', function(){
  window.location.href = 'siteTrees.html';
});

cancel.addEventListener('click', function(){
  window.location.href = 'siteTrees.html';
});