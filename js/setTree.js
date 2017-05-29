const cancel = document.querySelector('.addTree');
const confirm = document.querySelector('.finish');
const back = document.querySelector('.back');

const quickreview1 = document.querySelector('.treeDetails1');
const quickreview2 = document.querySelector('.treeDetails');


cancel.addEventListener('click', function(){
  window.location.href = 'siteTreeBranch.html';
});

confirm.addEventListener('click', function(){
  window.location.href = 'siteTreeStat.html';
});

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});

quickreview1.addEventListener('click', function(){
  window.location.href = 'treeQuickReview.html';
});

quickreview2.addEventListener('click', function(){
  window.location.href = 'treeQuickReview.html';
});
