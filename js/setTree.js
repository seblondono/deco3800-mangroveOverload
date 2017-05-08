const cancel = document.querySelector('.addTree');
const confirm = document.querySelector('.finish');
const back = document.querySelector('.back');



cancel.addEventListener('click', function(){
  window.location.href = 'siteTreeBranch.html';
});

confirm.addEventListener('click', function(){
  window.location.href = 'siteTreeStat.html';
});

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});
