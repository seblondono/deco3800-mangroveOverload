
const addTree = document.querySelector('.addTree');
const treeCount = document.querySelector('.treeCount');
const confirm = document.querySelector('.finish');
const treeReview = document.querySelector('.treeDetails');
const back = document.querySelector('.back');
const siteTreesStat = document.querySelector('#siteTreesStat');

addTree.addEventListener('click',function () {
  window.location.href = "siteTreeBranch.html";
});

treeCount.addEventListener('click',function () {
  window.location.href = "treeCounter.html";
});

confirm.addEventListener('click', function(){
  window.location.href = 'site.html';
});

back.addEventListener('click', function(){
  window.location.href = 'site.html';
});

siteTreesStat.addEventListener('click',function () {
  window.location.href = "siteTreeStat.html";
});

treeReview.addEventListener('click', function(){
  window.location.href = 'treeReview.html';
});
