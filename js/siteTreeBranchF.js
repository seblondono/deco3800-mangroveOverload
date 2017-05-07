const cancel = document.querySelector('.addTree');
const ok = document.querySelector('#accept');

//Javascript fordward functionalities
cancel.addEventListener('click', function(){
  window.location.href = 'siteSpecification.html';
});
ok.addEventListener('click',function goToSiteTreeBranch() {

  window.location.href = "siteTrees.html";
});
